import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from './App'
import NavWeb from './NavWeb'
/* import Buscar from './view/Buscar/Busqueda'
import Generos from './view/Generos/Generos'
import LogIn from '../client/view/Login/LogIn'
import LogOut from './view/Login/LogOut'
import ReiniciarPass from './view/Login/ReiniciarContrasena'
import ConfirmarPass from './view/Login/ReiniciarContrasenaNueva'
import Registro from '../client/view/Registro/RegistroMain'
import Visor from './view/Vista/VisorMain'
import Contacto from './view/Contacto/Contacto'
import Favoritos from './view/Favoritos/FavoritosMain'
import Calendario from './view/Contacto/Calendario'; */

const AppRouter = () =>

    <Switch>
       <Route path="/" exact component={Index}/>
       <Route path="/nav" exact component={NavWeb}/>
        {/* <Route path="/inicio" exact component={Generos} />
        <Route path="/buscar"exact={true}  replace={true}  component={Buscar} />
        <Route path="/registro" component={Registro} /> 
        <Route path="/logout" component={LogOut} /> 
        <Route path="/reset-pass" component={ReiniciarPass} /> 
        <Route path="/confirmar-pass" component={ConfirmarPass} /> 
        <Route path="/visor" component={Visor} /> 
        <Route path="/contacto" component={Contacto} /> 
        <Route path="/favoritos" component={Favoritos} />  
        <Route path="/calendario" component={Calendario} />    
        <Route path="*" component={Generos} /> 
         */}
    </Switch>

export default AppRouter;
