import React, { Component } from 'react';

export default class Intro extends Component {
    render() {
        return (
            <div className="row ">
                <div className="col-12 col-sm-12 col-md-6 intro-padding ">
                <img src="img/relleno-intro.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-12 col-sm-12 col-md-6 intro-padding">
                <p><span className="intro-titulo span-titulo"></span> <span>El pasaje estándar Lorem Ipsum, usado desde el año 1500.</span></p>
                
                <p className="intro-subtitulo">  El pasaje estándar Lorem Ipsum, usado desde el año 1500.</p>
                
                <p className="intro-texto">
                El pasaje estándar Lorem Ipsum, usado desde el año 1500.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
</div>
            </div>
        );
    }
}
