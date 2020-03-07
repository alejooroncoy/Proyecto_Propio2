import React from 'react';
import Header from './header';
import Footer from './footer';
import {withRouter} from 'react-router-dom';
const Layout = withRouter(({ children, location }) => (
  <div className='App'>
    <Header location={location} />
    { children }
    <Footer />
  </div>
));

export default Layout;
