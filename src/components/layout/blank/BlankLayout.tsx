import { FunctionComponent, ReactNode } from 'react';
import styles from './BlankLayout.module.scss';

interface Props {
  children: ReactNode;
}

const BlankLayout: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default BlankLayout;
