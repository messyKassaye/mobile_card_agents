import DashboardIcon from '@material-ui/icons/Dashboard'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import SettingIcon from '@material-ui/icons/Settings'
import VideocamIcon from '@material-ui/icons/Videocam'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import MusicNotIcon from '@material-ui/icons/MusicNote'
import PeopleIcon from '@material-ui/icons/People';
import ExtensionIcon from '@material-ui/icons/Extension';
import BusinessIcon from '@material-ui/icons/Business'
import PlaceIcon from '@material-ui/icons/Place';
import WarningIcon from '@material-ui/icons/Warning';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import React from "react";
import { BusinessCenter, LocalMall, Send, SimCard } from '@material-ui/icons'
import PersonIcon from '@material-ui/icons/Person'
const AgentDrawerMenu = [
    {
        name:'Dashboard',
        route:'/auth',
        icon:<DashboardIcon/>
    },
    
    {
        name:'My cards',
        route:'/auth/agents/my_cards',
        icon:<SimCard/>
    },
    {
        name:'Card request',
        route:'/auth/agents/card_request',
        icon:<Send/>
    },
    {
        name:'Sell and buy',
        route:'/auth/agents/sell_buy',
        icon:<AttachMoneyIcon/>
    },
    {
        name:'Settings',
        route:'/auth/partners/settings',
        icon: <SettingIcon/>,
    },
]

export default AgentDrawerMenu
