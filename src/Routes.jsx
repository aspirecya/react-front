import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from "./pages/Home";
import Account from "./pages/Account";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/account" component={Account}/>
            </div>
        );
    }
}

export default Routes;