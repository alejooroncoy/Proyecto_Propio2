import React from 'react';
import Header from './header';
import Footer from './footer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
const Layout = withRouter((props) => {
  const {children,location} = props;
  return(
  <div className='App'>
    <Header location={location}/>
    { children }
    <Footer />
  </div>
)});
const mapStateToProps = state => {
  return {
      shopping_cart: state.shopping_cart,
  }
}
export default connect(mapStateToProps,null)(Layout);
