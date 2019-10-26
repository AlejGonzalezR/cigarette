import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./client/views/Inicio";
import Portada from "./client/Inicio2"

class routes extends Component {
    render() {
       
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/q" exact component={Portada} />
                </Switch>
            </React.Fragment>
        );
    }
       
    
}
export default routes;