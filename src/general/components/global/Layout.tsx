import { ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

function Layout(props: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <>{props.children}</>
      <Footer />
    </>
  );
}

export default Layout;
