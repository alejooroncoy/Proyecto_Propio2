import React,{useEffect} from 'react'; 
import {connect} from 'react-redux';
import {getProduct} from '../actions';
const ProductPage = props => {
    const {products_R,getProduct} = props;
    useEffect(() => {
        getProduct(props.match.params.id)
    }, [])
    return(
        <main style={{paddingTop: '3rem'}}>
            <h1>{products_R.title}</h1>
           <img src={products_R.cover} alt={products_R.title}/>
            <h1>{products_R.description}</h1>
            <h2>Valor: {products_R.cost}</h2>
            <input type="text" value={products_R.cantidad} placeholder="Cantidad"/>
       </main>
    )
};
const mapDispatchtoProps = {
    getProduct
}
const mapStateToProps = state => {
    return{
        products_R: state.products_R
    };
};
export default connect(mapStateToProps,mapDispatchtoProps)(ProductPage);
 