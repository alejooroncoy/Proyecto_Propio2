import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import App from './routers/App';
import Cristal from './assets/static/cristal-homologado.png';
import Corona from './assets/static/corona-homologado.png';
import Cusqueña from './assets/static/cusqueña-homologado.png';
import Pilsen from './assets/static/pilsen-homologado.png';
const initialState = {
    "shopping_cart": [],
    "products_R": [],
    'isDB': false,
    "searching": [],
    "products": [
        {
            "id": 5,
            "title": 'Cerveza Cristal',
            'cover': Cristal,
            'description': 'Unidos Podemos!',
            "cost": 35,
            'cantidad': 1,
        },
        {
            'id': 10,
            'title': 'Cerveza Corona',
            'cover': Corona,
            'description': 'Para refrescar tus momentos',
            'cost': 45,
            'cantidad': 1,
        },
        {
            'id': 15,
            'title': 'Cerveza Cusqueña',
            'cover': Cusqueña,
            'description': 'Hechos con maestría',
            'cost': 40,
            'cantidad': 1,
        },
        {
            'id': 20,
            'title': 'Cerveza Pilsen Callao',
            'cover': Pilsen,
            'description': 'Unidos por la amistad',
            'cost': 38,
            'cantidad': 1,
        }
    ]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState,composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);