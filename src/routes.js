import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
              <Switch>              
               <Route path="/login.html" component= { App } />
               <Route path="/" component= { Home } />               
              </Switch>
            </Router>
        );
    }

}
