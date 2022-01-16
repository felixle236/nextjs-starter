import { FunctionComponent } from 'react';
import Navigation from '@components/navigation/Navigation';
import styles from './Footer.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Footer: FunctionComponent<Props> = ({}) => {
  const copyright = `© NextJS ${new Date().getFullYear()}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>{copyright}</div>

      <nav>
        <Navigation activeClassName={styles.active} links={[]} />
      </nav>
    </footer>
  );
};

export default Footer;
