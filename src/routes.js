import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from './client/views/Inicio/App'
import PGet from "./client/PGet";


class routes extends Component {
    render() {
       
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/pg/:hotel/:fechainicio/:fechafin/:adultos/:ninos/:config" exact component={PGet} />
                    <Route path="*"  component={Inicio} />
                </Switch>
            </React.Fragment>
        );
    }
       
    
}
export default routes;