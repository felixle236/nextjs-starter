import NavigationLink from '@components/link/NavigationLink';
import { FunctionComponent } from 'react';

interface Props {
  links: { label: string; href: string }[];
  onClick?: () => void;
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
}

const Navigation: FunctionComponent<Props> = ({ links, onClick, linkClassName, activeClassName }) => (
  <>
    {links.map((link, i: number) => (
      <NavigationLink key={i} link={link} className={linkClassName} onClick={onClick} activeClassName={activeClassName} />
    ))}
  </>
);

export default Navigation;
