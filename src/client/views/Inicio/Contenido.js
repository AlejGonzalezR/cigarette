import React, { Component } from 'react';
import CardGaleria from './CardGaleria';
import Footer from './Footer';
import Intro from './Intro';

export default class Contenido extends Component {
    render() {
        return (
            <div>
                <div className="container con-fit">
                
                <Intro></Intro>
                
                <div className="row">
                <CardGaleria></CardGaleria>
                <CardGaleria></CardGaleria>
                <CardGaleria></CardGaleria>

                <CardGaleria></CardGaleria>
                <CardGaleria></CardGaleria>
                <CardGaleria></CardGaleria>
                </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

