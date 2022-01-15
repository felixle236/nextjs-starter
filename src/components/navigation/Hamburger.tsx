import { FunctionComponent } from 'react';
import styles from './Hamburger.module.scss';

interface Props {
  isOpen?: boolean;
  onClick: () => void;
  className?: string;
}

const Hamburger: FunctionComponent<Props> = ({ isOpen, onClick, className }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a onClick={onClick}>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </a>
);

export default Hamburger;
