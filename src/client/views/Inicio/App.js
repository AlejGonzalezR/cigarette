import React, { Component } from 'react';
import NavMovil from './NavMovil';
import NavWeb from './NavWeb';
import Portada from './Portada';
import Contenido from './Contenido';


export default class App extends Component {
    
	render() {
		return (
			
            <div>
                <div className="cover-portada">
                <NavWeb></NavWeb>
                <NavMovil></NavMovil>
                <Portada></Portada>
                </div>
                <Contenido></Contenido>
			</div>
        );
        
	}
}

