import MainHeader from './MainHeader';

const Layout = props => (
  <>
    <MainHeader />
    <main>{props.children}</main>
  </>
);

export default Layout;
