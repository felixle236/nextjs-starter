import classNames from 'classnames';
import { ReactNode, FunctionComponent } from 'react';
import styles from './PageContainer.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
}

const PageContainer: FunctionComponent<Props> = ({ children, className }) => (
  <div className={classNames(styles.main, className)}>{children}</div>
);

export default PageContainer;
