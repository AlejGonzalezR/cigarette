import React, { Component } from 'react';

export default class Intro extends Component {
    render() {
        return (

            this.props.datos.map((datos, index) =>
                index % 2 === 0 ?
                    <div className="row " key={index}>
                        <div className=" valign-wrapper ">
                            <div className="col s12 m12 l6 lx6  center-align">
                                <img src={datos.img} className="imgsize-intro materialboxed" alt="" />
                            </div>
                            <div className="col s12 m12 l6 lx6   center-align">
                                <p>
                                    <span className="span-titulo"></span>
                                    <span>{datos.titulo}</span>
                                    <span className="span-titulo"></span>
                                </p>
                                <p className="fa">
                                    {datos.detalle}
                                </p>
                            </div>
                        </div>

                    </div>
                    :
                    <div className="row " key={index}>
                        <div className=" valign-wrapper ">
                            <div className="col s12 m12 l6 lx6  center-align ">
                                <p>
                                    <span className="span-titulo"></span>
                                    <span>{datos.titulo}</span>
                                    <span className="span-titulo"></span>
                                </p>

                                <p className="fa">
                                    {datos.detalle}
                                </p>
                            </div>
                            <div className="col s12 m12 l6 lx6  center-align ">
                                <img src={datos.img} className="imgsize-intro materialboxed" alt="" />
                            </div>
                        </div>

                    </div>
            )


        );
    }
}
