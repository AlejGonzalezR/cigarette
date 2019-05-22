import React, { Component } from 'react';
import NavMovil from './NavMovil';
import NavWeb from './NavWeb';
import Portada from './Portada';


export default class App extends Component {
    constructor(props) {
        super(props);
        
       
        
     };
	render() {
		return (
			
            <div>
                <div className="cover-portada">
                <NavWeb></NavWeb>
                <NavMovil></NavMovil>
                <Portada></Portada>
                </div>
			</div>
        );
        
	}
}

