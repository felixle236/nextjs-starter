import { FunctionComponent, ReactNode } from 'react';
import styles from './DefaultLayout.module.scss';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

interface Props {
  children?: ReactNode;
}

const DefaultLayout: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
);

export default DefaultLayout;
