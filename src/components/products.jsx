import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getToCar, isDBf} from '../actions';
import {Link} from 'react-router-dom';
import swal from '@sweetalert/with-react'
import '../assets/styles/components/products.scss';
const Products = props => {
    const {id,cover, title, description,cost, islist} = props;
    const {shopping_cart, products} = props;
    const shopping_cart_v = Object.keys(shopping_cart).length;
    const getToCarf = (numero,uno) => {
      if(numero > 0)
      {
          props.getToCar(
            {
              uno,numero,id,cover, title, description,cost,
            })
      }
      if(numero < 1)
      {
        swal("Envía una cantidad disponible",{
          icon: "error",
        });
      }
      }

    const alertf = (e) => {
      const existe = shopping_cart.find(item => item.id == id); 
      if(!existe)
        {
          e.preventDefault();
          swal({
          buttons: [
            'Me confundi', 'Añadir a Carrito'
          ],
          content: 
          <div>
            <h2>{title}</h2>
            <div className="row">
            <img className="responsive-img col s6"src={cover} alt={title}></img>
            <h5 className="col s3">
                {`Costo Unitario: ${cost} soles`}
              </h5>
              <div className="input-field col s3">
                <input id="number" type="number" className="validate"/>
                <label htmlFor="number">Cantidad</label>
                <span className="helper-text" data-error="Por favor solo números" data-success="Listo!">Cantidad de productos</span>
              </div>
            </div>
          </div>})
          .then((willDelete) => {
            if (willDelete) {
              swal('Añadido correctamente a Carrito', {
                icon: "success",
              });
              const numero = Number(document.querySelector('#number').value);
              const uno = 1;
                getToCarf(numero,uno)
            } else {
              swal("Regresa!",{
                icon: "error",
              });
            }
          });
        } 
        else
        {
          swal("Ups!",'Si quieres modificar la cantidad por favor vaya al carrito','warning')
        }
    }
    return( 
      <>
        <div className="card col s12 m6 l6 xl3">
           <div className="card-image">
            <Link to={`/${id}`}>
               <img className="responsive-img" 
               src={cover} 
               alt={title} 
               /> 
            </Link>
                <a href="#" id="set_add" className="btn-floating pulse halfway-fab waveseffect waves-light black">
                <i className="material-icons tiny com" 
                id = {id}
                onClick = {alertf}
                >
                    add_shopping_cart
                </i></a>
           </div>
           <div className="card-content white-text">
           <span className="card-title">{title}</span>
            <p>{description}</p>
            <p>A un costo de {cost} soles</p>
           </div>
        </div>
    </>
    )
}
const mapStateToProps = state => {
    return {
      shopping_cart: state.shopping_cart,
      products: state.products,
    }
}
const mapDispatchToProps = {
    getToCar,
    isDBf
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)