import { NextComponentType, NextPageContext } from 'next';
import { AppContext, AppProps as NextAppProps } from 'next/app';
import { FunctionComponent, useEffect, useState } from 'react';
import { Auth } from '@app/models/Auth';
import { Client } from '@app/models/Client';
import { Manager } from '@app/models/Manager';
import { AuthGuard } from '@common/AuthGuard';
import Guard from '@components/guard/Guard';
import Layout from '@components/layout/Layout';
import PageLoading from '@components/page-loading/PageLoading';
import { AuthKey } from '@constants/Common';
import AuthContext from '@core/AuthContext';
import PageContext from '@core/PageContext';
import { useSocket } from '@core/SocketContext';
import { checkUserAuthenticated } from '@utils/Auth';
import { setCookie } from '@utils/Cookie';

type AppProps<P = { auth?: Auth; profile?: Client | Manager }> = {
  pageProps: P;
  Component: NextComponentType<NextPageContext, any, P> & { layout?: FunctionComponent; guard?: AuthGuard };
} & Omit<NextAppProps<P>, 'pageProps'>;

function App({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState<Auth | undefined>(pageProps.auth);
  const [profile, setProfile] = useState<Client | Manager | undefined>(pageProps.profile);

  const setUserAuthenticated = (data: { auth: Auth; profile: Client | Manager }) => {
    setCookie(AuthKey, data.auth.token, 24 * 60 * 60);
    setAuth(data.auth);
    setProfile(data.profile);
  };
  const clearUserAuthenticated = () => {
    setCookie(AuthKey, '', -1);
    setAuth(undefined);
    setProfile(undefined);
  };

  const socket = useSocket(process.env.NEXT_PUBLIC_WS_URL ?? '', 'tracking');
  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Tracking channel is connected!');
      });

      socket.on('disconnect', () => {
        console.log('Tracking channel is disconnected!');
      });

      socket.on('connect_error', (err: Error) => {
        console.log('connect_error', err);
      });
    }
  }, [socket]);

  return (
    <PageContext.Provider value={{}}>
      <AuthContext.Provider value={{ auth, profile, setAuth, setProfile, setUserAuthenticated, clearUserAuthenticated }}>
        <PageLoading />
        <Guard guard={Component.guard}>
          <Layout layout={Component.layout}>
            <Component {...pageProps} />
          </Layout>
        </Guard>
      </AuthContext.Provider>
    </PageContext.Provider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  // Server side render
  const isSsr = appContext.router.isSsr !== false;
  if (isSsr) {
    const pageProps = await checkUserAuthenticated(appContext.ctx);
    return { pageProps };
  }
  return { pageProps: {} };
};

export default App;
