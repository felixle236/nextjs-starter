import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthContext } from '@core/AuthContext';
import { getProfile } from '@utils/Auth';
import styles from './Home.module.scss';

export default function Home() {
  const { locale } = useRouter();
  const { auth } = useAuthContext();

  useEffect(() => {
    // Test
    async function test() {
      let profile;
      if (auth) {
        profile = await getProfile(auth.token, auth.roleId, locale);
      }
      console.log('test', profile);
    }
    test();
  }, [auth, locale]);

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
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </p>
        <p>
          <Link href="/protected">
            <a>Protected Page</a>
          </Link>
        </p>
        <p className={styles.description}>This is not an official starter!</p>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=typescript-nextjs-starter" target="_blank" rel="noopener noreferrer">
          Powered by NextJS
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
