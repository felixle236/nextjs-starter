import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface Props {
  link: { label: string; href: string };
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
}

const Navigation: FunctionComponent<Props> = ({ link, onClick, className, activeClassName }) => {
  const { label, href } = link;
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <button onClick={onClick} className={classNames(className, isActive && activeClassName)}>
      {label}
    </button>
  );
};

export default Navigation;
