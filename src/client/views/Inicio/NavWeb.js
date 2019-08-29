import React, { Component } from 'react';

export default class NavWeb extends Component {


    render() {
        return (
            <div className="display-nav-web">
                <nav class="navbar navbar-expand-lg navbar-light nav-color ">


                    <div class="collapse navbar-collapse nav-style order-2" id="navbarTogglerDemo">
                        <a class="navbar-brand" href="https://github.com"><img className="nav-img2" src="img/brand.png" alt="" /></a>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="/inicio">Dashboard
                                <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="/fqrequest">Group</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="/reservations">reservations</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

