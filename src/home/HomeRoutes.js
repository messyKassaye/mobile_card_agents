import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import DownloadApp from './DownloadApp';
import HomePage from './HomePage';
import Login from './Login';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

class HomeRoutes extends React.Component{
    render(){

       return <Router>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignUpPage}/>
            </Switch>
        </Router>
    }
}

export default HomeRoutes