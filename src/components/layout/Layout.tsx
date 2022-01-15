import { FunctionComponent, ReactNode } from 'react';
import DefaultLayout from './default/DefaultLayout';

interface Props {
  children?: ReactNode;
  layout?: FunctionComponent;
}

const Layout: FunctionComponent<Props> = ({ children, layout: LayoutComponent }) => (
  <>{LayoutComponent ? <LayoutComponent>{children}</LayoutComponent> : <DefaultLayout>{children}</DefaultLayout>}</>
);

export default Layout;
