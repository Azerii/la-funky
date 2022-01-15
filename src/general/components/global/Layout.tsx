import { ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
  noBreadcrumb?: boolean;
}

function Layout(props: Props): JSX.Element {
  const { noBreadcrumb } = props;
  return (
    <>
      <Navbar />
      {!noBreadcrumb && <Breadcrumb />}
      <>{props.children}</>
      <Footer />
    </>
  );
}

export default Layout;
