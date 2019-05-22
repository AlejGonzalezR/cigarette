import React, { Component } from 'react';

class Portada extends Component {
    render() {
        return (
            <div class="position-relative overflow-hidden  text-center ">
                <div className="wrap-portada">
                    <div className="row">
                        <div class="col-md-6 p-lg-5 mx-auto my-0 padding-portada">
                            <h1 class="display-4 font-weight-normal h1-portada">GAZDA</h1>
                            <p class="lead font-weight-normal">CIGARS FACTORY</p>
                            <p class="lead font-weight-normal">A wide of the excellent quality tobaccos</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portada;