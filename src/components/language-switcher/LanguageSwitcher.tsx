import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const LanguageSwitcher: FunctionComponent<Props> = () => {
  const router = useRouter();

  return (
    <>
      <Link href={router.pathname} locale="en" passHref>
        <a>English</a>
      </Link>
      <Link href={router.pathname} locale="vi" passHref>
        <a>Việt Nam</a>
      </Link>
      <Link href={router.pathname} locale="ja" passHref>
        <a>日本</a>
      </Link>
    </>
  );
};

export default LanguageSwitcher;
