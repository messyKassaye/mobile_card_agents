import React, {Suspense} from "react";
import {getRole} from "../TokenService";
import Loading from "../helpers/Loading";
import {BrowserRouter as Router} from "react-router-dom";
import MainDialog from '../authentication/commons/MainDialog'
let Component = null
class Authenticated extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
        Component = React.lazy(()=> import("./agents/AgentsRoute")) 
        return (
            <Suspense fallback={<Loading/>}>
                <MainDialog/>
                <Router>
                    <Component/>
                </Router>
            </Suspense>
        )
    }
}

export default Authenticated
