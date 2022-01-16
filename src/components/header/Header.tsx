import classNames from 'classnames';
import Link from 'next/link';
import { useState, FunctionComponent } from 'react';
import LanguageSwitcher from '@components/language-switcher/LanguageSwitcher';
import Logo from '@components/logo/Logo';
import Hamburger from '@components/navigation/Hamburger';
import Navigation from '@components/navigation/Navigation';
import styles from './Header.module.scss';

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

        <LanguageSwitcher />
      </nav>

      <Hamburger isOpen={isOpen} onClick={toggle} className={styles.hamburger} />
    </header>
  );
};

export default Header;
