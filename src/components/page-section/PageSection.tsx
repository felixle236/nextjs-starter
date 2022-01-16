import classNames from 'classnames';
import { FunctionComponent, ReactNode } from 'react';
import styles from './PageSection.module.scss';

interface Props {
  children: ReactNode;
  alternate?: boolean;
}

const Section: FunctionComponent<Props> = ({ children, alternate }) => (
  <section className={classNames(styles.section, { [styles.alternate]: alternate })}>{children}</section>
);

export default Section;
