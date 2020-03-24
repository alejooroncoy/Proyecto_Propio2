import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import ProductPage from '../containers/ProductPage';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactGA.initialize('UA-000000-01');

ReactGA.pageview(`${window.location.pathname} ${window.location.search}`);

history.listen(location => {
    ReactGA.pageview(`${window.location.pathname} ${window.location.search}`);
})
const App = () => (
    <Router history={history}>
        <Layout>
            <Switch>
                <Route exact path='/' component = {Home}/>
                <Route exact path='/:id' component = {ProductPage}/>
            </Switch>
        </Layout>
    </Router>
)
export default App;