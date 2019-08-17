import React, { Component } from 'react';


export default class NavMovil extends Component {
    
    render() {
        return (
            <div className="display-nav-movil">
                <nav class="navbar navbar-expand-lg navbar-light nav-color">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="https://github.com"><img className="nav-img" src="img/brand.png" alt="" /></a>

                    <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                            <li class="nav-item active">
                                <a class="nav-link" href="https://github.com">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li class="nav-item">
                                <a class="nav-link" href="https://github.com">Link</a>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="https://github.com" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        </div>
                </nav>
                
            </div>
        );
    }
}

