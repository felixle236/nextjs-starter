import { useState, FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import LanguageSwitcher from '@components/language-switcher/LanguageSwitcher';
import Hamburger from '@components/navigation/Hamburger';
import Logo from '@components/logo/Logo';
import Navigation from '@components/navigation/Navigation';
import Link from 'next/link';

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <header className={classNames(styles.header, { [styles.open]: isOpen })}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <Navigation activeClassName={styles.active} links={[]} onClick={close} />

        <LanguageSwitcher onClick={close} />
      </nav>

      <Hamburger isOpen={isOpen} onClick={toggle} className={styles.hamburger} />
    </header>
  );
};

export default Header;
