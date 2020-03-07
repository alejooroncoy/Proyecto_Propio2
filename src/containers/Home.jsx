import React from 'react';
import {connect} from 'react-redux';
import Search from '../components/search';
import Catalogo from '../components/catalogo';
import Products from '../components/products';
import Conteners from '../components/conteners';
import '../assets/styles/components/home.scss'
import { isDBf } from '../actions';
const Home = props => {
    document.addEventListener("visibilitychange", cambio)
    function cambio () {
   const isVisible = document.visibilityState === "visible";
   const title = document.querySelector("title")
         if(isVisible)
         {
             title.innerHTML = `Wilmer Cervezas &#128512&#128514`
         }
         else 
         {
             title.innerHTML = `No te vayassss!! &#128557&#128559`
         }
   };
    const {products, shopping_cart, searching,isDB} = props;
    const cheked = () => {
       document.querySelector("#body").classList.toggle('body_2');
       document.querySelector("#body").classList.toggle('body');
    }
    if(isDB)
    {
        return searching.length > 0 ?
            (
                <div className="body" id="body">
                <Search/>
                <Catalogo text="Resultados:">
                      <Conteners>
                          {
                              searching.length !== 0 &&
                              searching.map(item => 
                                  <Products key={item.id} {...item} isMyList={true} />
                              )
                          }
                      </Conteners>
                </Catalogo>
                 <div className="switch">
                      <label>
                              De Día
                          <input id="Dia_Noche" 
                          type="checkbox"
                          onClick={cheked}
                          />
                          <span className="lever"></span>
                           De noche
                      </label>
                  </div>
              </div> 
        ): (
            <div className="body" id="body">
          <Search/>
          <Catalogo text="Nuestros productos:">
                <Conteners>
                    {
                        products.length !== 0 &&
                        products.map(item => 
                            <Products key={item.id} {...item} />
                        )
                    }
                </Conteners>
          </Catalogo>
           <div className="switch">
                <label>
                        De Día
                    <input id="Dia_Noche" 
                    type="checkbox"
                    onClick={cheked}
                    />
                    <span className="lever"></span>
                     De noche
                </label>
            </div>
        </div> 
        )
    }
    return(
        <div className="body" id="body">
          <Search/>
          <Catalogo text="Nuestros productos:">
                <Conteners>
                    {
                        products.length !== 0 &&
                        products.map(item => 
                            <Products key={item.id} {...item} />
                        )
                    }
                </Conteners>
          </Catalogo>
           <div className="switch">
                <label>
                        De Día
                    <input id="Dia_Noche" 
                    type="checkbox"
                    onClick={cheked}
                    />
                    <span className="lever"></span>
                     De noche
                </label>
            </div>
        </div> 
    );
};
const mapStatetoProps = state => {
    return{
        products: state.products,
        shopping_cart: state.shopping_cart,
        searching: state.searching,
        isDB: state.isDB,
    }
}
export default connect(mapStatetoProps,null)(Home);