import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import AgentsDashboard from './AgentsDashboard';

class AgentsRoute extends React.Component{

    render(){
        return <Router>
                <Switch>
                    <Route path='/auth' component={AgentsDashboard}/>
                </Switch>
            </Router>

    }
}

export default AgentsRoute