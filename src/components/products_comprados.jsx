import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {removeToCar,quitar,borrarSame,getToCar} from '../actions';
import '../assets/styles/components/products_comprados.scss';
const Products_comprados= props => {
    const {uno,shopping_cart,cover,id,title,numero,cost,description} = props; 
    const [state, setState] = useState({
        uno:uno,
        numero: numero,
        cost: cost,
        id: id,
        cover: cover,
        title: title,
    })
    const DeleteToCarf = itemId => {
        props.removeToCar(itemId);
    }
    // const reduceProduct = (numero,id) => {
    //     id -= 1;
    //     numero -= 1;
    //     setState({
    //         ...state,
    //         id: id,
    //         numero: numero
    //     })
    //     props.quitar({
    //         uno,numero,id,cover, title, description,cost,
    //       });
    //     props.removeToCar(id + 1);
    //     props.borrarSame();
    // }
    // const addProduct = (numero,id) => {
    //     numero += 1;
    //     setState({
    //         ...state,
    //         numero: numero
    //     })
    // }
    const numero_p = cost * state.numero;
    return(
        <>
                <table className="responsive-table">
                <tbody>
                    <tr>
                        <td>
                            <img className="responsive-img" src={cover} alt={title}/>
                            <p className="p">{title}</p>
                            <p className="p">{`Costo: ${numero_p} soles`}</p>
                            <p className="p">{`Estás pidiendo ${state.numero} veces este mismo producto`}</p>
                            {
                                state.numero > 1 ?
                                <a className="btn waves-effect waves-light black" onClick={() => DeleteToCarf(id)}>
                                Eliminar Productos<i className="material-icons right">remove_shopping_cart</i>
                                </a>:
                                <a className="btn waves-effect waves-light black" onClick={() => DeleteToCarf(id)}>
                                Eliminar Producto<i className="material-icons right">remove_shopping_cart</i>
                            </a>
                            }
                            {/* {' '}
                            {/* <a className="btn-floating waves-effect waves-light black">
                            <i className="material-icons" onClick={() => addProduct(state.numero,state.id)}>add_circle</i>
                                </a>
                            <a className="btn-floating waves-effect waves-light black">
                            <i className="material-icons" onClick={() => reduceProduct(state.numero,state.id)}>remove_circle</i>
                            </a> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
const mapStateToProps = state => {
    return{
        shopping_cart: state.shopping_cart,
    }
}
const mapDispatchToProps = {
    removeToCar,
    quitar,
    borrarSame,
    getToCar
}


export default connect(mapStateToProps,mapDispatchToProps)(Products_comprados);