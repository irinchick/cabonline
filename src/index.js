import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import Blog from "./views/Blog";
import {Switch} from "react-router";

ReactDOM.render(
    <Router >
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:id" component={App} />
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
