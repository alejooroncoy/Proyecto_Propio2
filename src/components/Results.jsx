import React,{} from 'react';
import {connect} from 'react-redux';
const Results = props => {
    const {stateF} = props;
    const sumatoria = (users, userspe) => users + Number(userspe.cost * userspe.numero);
    const total_costo = stateF.shopping_cart.reduce(sumatoria,0);
    return(
        <>
            <h1>{total_costo}</h1>
        </>
    )
};
export default connect(null,null)(Results);