import React from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import AgentsHome from './AgentsHome';
import CardRequest from './cardRequest/CardRequest';
import MyCards from './myCards/MyCards';
import SellAndBuy from './sellAndBuy/SellAndBuy';

class AgentsNestedRoute extends React.Component{

    render(){
        return <Switch>
        <Route path='/auth' component={AgentsHome} exact/>
        <Route path={'/auth/agents/my_cards'} component={MyCards}/>
        <Route path={'/auth/agents/card_request'} component={CardRequest}/>
        <Route path={'/auth/agents/sell_buy'} component={SellAndBuy}/>
   </Switch>

    }
}

export default AgentsNestedRoute