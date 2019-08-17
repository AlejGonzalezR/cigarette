import React, { Component } from 'react';

export default class NavWeb extends Component {
  

    render() {
        return (
            <div className="display-nav-web">
                <nav class="navbar navbar-expand-lg navbar-light nav-color ">
                    
                    
                    <div class="collapse navbar-collapse justify-content-center order-2" id="navbarTogglerDemo">
                   <a class="navbar-brand" href="https://github.com"><img className="nav-img2" src="img/brand.png" alt=""/></a>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-lg navbar-light nav-color2">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center order-2" id="navbarTogglerDemo03">
                    <div class="d-flex">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0  ">
                            <li class="nav-item nav-item-web ">
                                <a class="nav-link2" href="https://github.com">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li class="nav-item nav-item-web">
                                <a class="nav-link2" href="https://github.com">Link</a>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li class="nav-item nav-item-web">
                                <a class="nav-link2 " href="https://github.com" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        );
    }
}

