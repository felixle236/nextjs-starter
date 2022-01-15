import { AppContext, AppProps as NextAppProps } from 'next/app';
import AuthContext from '@core/AuthContext';
import PageContext from '@core/PageContext';
import { Auth } from '@app/models/Auth';
import { FunctionComponent, useState } from 'react';
import { Manager } from '@app/models/Manager';
import { Client } from '@app/models/Client';
import { Locale } from '@common/Locale';
import PageLoading from '@components/page-loading/PageLoading';
import { AuthGuard } from '@common/AuthGuard';
import { NextComponentType, NextPageContext } from 'next';
import Layout from '@components/layout/Layout';
import Guard from '@components/guard/Guard';
import { checkUserAuthenticated } from '@utils/Auth';

type AppProps<P = { token?: string; auth?: Auth; profile?: Client | Manager }> = {
  pageProps: P;
  Component: NextComponentType<NextPageContext, any, P> & { layout?: FunctionComponent; guard?: AuthGuard };
} & Omit<NextAppProps<P>, 'pageProps'>;

function App({ Component, pageProps }: AppProps) {
  const [token] = useState<string | undefined>(pageProps.token);
  const [auth, setAuth] = useState<Auth | undefined>(pageProps.auth);
  const [profile, setProfile] = useState<Client | Manager | undefined>(pageProps.profile);
  const [locale, setLocale] = useState<Locale>();

  return (
    <PageContext.Provider value={{ locale, setLocale }}>
      <AuthContext.Provider value={{ token, auth, profile, setAuth, setProfile }}>
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
