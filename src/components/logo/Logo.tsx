import Image from 'next/image';
import styles from './Logo.module.scss';

export const Logo = () => {
  return <Image src="/vercel.svg" width="283" height="64" alt="NextJS" />;
};

export default Logo;
