import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import App from './routers/App';

const initialState = {
    "shopping_cart": [],
    'isDB': false,
    "searching": [],
    "products": [
        {
            "id": 5,
            "title": 'Cerveza Cristal',
            'cover': 'src/assets/static/cristal-homologado.jpg',
            'description': 'Unidos Podemos!',
            "cost": 35,
        },
        {
            'id': 10,
            'title': 'Cerveza Corona',
            'cover': 'src/assets/static/corona-homologado.jpg',
            'description': 'Para refrescar tus momentos',
            'cost': 45,
        },
        {
            'id': 15,
            'title': 'Cerveza Cusqueña',
            'cover': 'src/assets/static/cusqueña-homologado.jpg',
            'description': 'Hechos con maestría',
            'cost': 40,
        },
        {
            'id': 20,
            'title': 'Cerveza Pilsen Callao',
            'cover': 'src/assets/static/pilsen.png',
            'description': 'Unidos por la amistad',
            'cost': 38,
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