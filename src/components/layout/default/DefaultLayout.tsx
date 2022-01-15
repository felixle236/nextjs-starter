import { FunctionComponent, ReactNode } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import styles from './DefaultLayout.module.scss';

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
