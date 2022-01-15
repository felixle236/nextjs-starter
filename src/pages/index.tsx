import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';
import { LocaleQueryKey } from '@constants/Locale';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthContext } from '@core/AuthContext';
import { RoleId } from '@app/enums/RoleId';
import clientService from '@app/services/ClientService';
import managerService from '@app/services/ManagerService';

export default function Home() {
  const router = useRouter();
  const { token, auth } = useAuthContext();

  useEffect(() => {
    // Test
    async function test() {
      let profile;
      if (auth.roleId === RoleId.Client) {
        profile = clientService.getProfile(token);
      } else {
        profile = await managerService.getProfile(token);
      }
      console.log('test', profile);
    }
    test();
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta name="description" content="TypeScript starter for Next.js that includes all you need to build amazing apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{` `}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <p>
          <Link
            href={{
              pathname: '/about',
              query: { [LocaleQueryKey]: router.query[LocaleQueryKey] },
            }}
          >
            <a>About Us</a>
          </Link>
        </p>
        <p>
          <Link
            href={{
              pathname: '/protected',
              query: { [LocaleQueryKey]: router.query[LocaleQueryKey] },
            }}
          >
            <a>Protected Page</a>
          </Link>
        </p>
        <p className={styles.description}>This is not an official starter!</p>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=typescript-nextjs-starter" target="_blank" rel="noopener noreferrer">
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
