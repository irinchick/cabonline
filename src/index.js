import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import Catalog from "./views/Catalogue";
import {Switch} from "react-router";

ReactDOM.render(
    <Router >
        <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/product/:id" component={App} />
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
