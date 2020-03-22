import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/header.scss';
import Products_comprados from './products_comprados';
import '../assets/styles/App.scss';

const Header = props => {
    const { shopping_cart } = props;
    const shopping_cart_v = shopping_cart.length;
    //Palabras
    const productos = 'productos';
    const producto = 'producto';
    const sumatoria = (users, userspe) => users + Number(userspe.cost * userspe.numero);
    const total_costo = shopping_cart.reduce(sumatoria,0);
    const ningun = 'ningun';//
    //Inicio(Materialize)
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {
            edge: "right",
            inDuration: 400,
            outDuration: 400
        });
      });
    return(
        <header className="">
            <nav className="black headerF">
                <a href="#" className="brand-logo center">Cervecería Wilmer</a>
                    <ul className="left hide-on-med-and-down">
                        <li><a href="#">Somos la primera licorería online netamente Peruana!!</a></li>
                    </ul>
                    <ul className="right hide-on-med-and-down notification-button" >
                        <li><a href="#">Los mejores Licores</a>
                        </li>
                    </ul>
            </nav>
            <div className="div_1">

                    <a href="#" 
                        className="btn-floating pulse btn-large waves-effect waves-light black sidenav-trigger notification-button" 
                        data-target="slide-out">
                        <i className="material-icons">
                            shopping_cart
                            <small className="notification-badge">{shopping_cart_v}</small>
                        </i>
                    </a>

                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="https://picsum.photos/400/500" alt="image"/>
                        </div>
                        <a href="#user"><img className="circle" src='src/assets/static/user-icon.png'/></a>
                        <a><span className="black-text name">{`Tienes ${shopping_cart_v > 0 ? shopping_cart_v: ningun} ${shopping_cart_v < 2 ? producto: productos} en el carrito.`}</span>
                    </a>
                        <a><p className="email"></p></a>
                        </div></li>
                        <li><a href="#">Productos a comprar:</a></li>
                        <li><div className="divider"></div></li>
                        <li><a className="subheader">Mis productos</a></li>
                        <li>
                        {
                            shopping_cart.length !== 0 &&
                            shopping_cart.map(item => 
                                <Products_comprados 
                                    key={item.id} 
                                    {...item}
                            />
                        )
                        }
                        {
                            shopping_cart.length > 0 ?
                                <a href="#">
                                    {total_costo}
                                </a>
                                    :
                            <a href="/">No tienes ningun producto</a>
                        } 
                        </li>
                </ul>
                </div>
        </header>
    )
}
const mapStateToProps = state => {
    return {
        shopping_cart: state.shopping_cart,
    }
}
export default connect(mapStateToProps,null)(Header);