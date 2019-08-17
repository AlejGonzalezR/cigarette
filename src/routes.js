import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from './client/views/Inicio/App'


class routes extends Component {
    render() {
       
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    
                </Switch>
            </React.Fragment>
        );
    }
       
    
}
export default routes;