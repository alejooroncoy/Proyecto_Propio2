import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import ProductPage from '../containers/ProductPage';
const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component = {Home}/>
                <Route exact path='/:id' component = {ProductPage}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)
export default App;