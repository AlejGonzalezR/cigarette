import React, { Component } from 'react';
import Intro from './Inicio/Intro'

class Inicio extends Component {


    render() {

        return (
            <div>
                <div id="index-banner" class="parallax-container">
                    <nav class="nav-transparent" role="navigation">
                        <div class="nav-wrapper container">
                            <a id="logo-container" href="#" class="brand-logo">Logo</a>
                            <ul class="right hide-on-med-and-down">
                                <li><a href="#">Navbar Link</a></li>
                            </ul>

                            <ul id="nav-mobile" class="sidenav">
                                <li><a href="#">Navbar Link</a></li>
                            </ul>
                            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        </div>
                    </nav>
                    <div class="section no-pad-bot">
                        <div class="container">
                            <br /><br />
                            <h1 class="header center teal-text text-lighten-2">Parallax Template</h1>
                            <div class="row center">
                                <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                            </div>
                            <div class="row center">
                                <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                            </div>
                            <br /><br />

                        </div>
                    </div>
                    <div class="parallax"><img src="background1.jpg" alt="Unsplashed background img 1" /></div>
                </div>


                <div class="container">
                    <div class="section">

                        <Intro datos={[{ img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", titulo: "¿Qué es Lorem Ipsum?", detalle: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen." },
                        { img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", titulo: "¿Qué es Lorem Ipsum?", detalle: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen." }]} />


                    </div>
                </div>


                <div class="parallax-container valign-wrapper">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <div class="row center">
                                <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                            </div>
                        </div>
                    </div>
                    <div class="parallax"><img src="background2.jpg" alt="Unsplashed background img 2" /></div>
                </div>

                <div class="container">
                    <div class="section">

                        <div class="row">
                            <div class="col s12 center">
                                <h3><i class="mdi-content-send brown-text"></i></h3>
                                <h4>Contact Us</h4>
                                <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="parallax-container valign-wrapper">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <div class="row center">
                                <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                            </div>
                        </div>
                    </div>
                    <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3" /></div>
                </div>

                <footer class="cover-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="white-text">Company Bio</h5>
                                <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


                            </div>
                            <div class="col l3 s12">
                                <h5 class="white-text">Settings</h5>
                                <ul>
                                    <li><a class="white-text" href="#!">Link 1</a></li>
                                    <li><a class="white-text" href="#!">Link 2</a></li>
                                    <li><a class="white-text" href="#!">Link 3</a></li>
                                    <li><a class="white-text" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                            <div class="col l3 s12">
                                <h5 class="white-text">Connect</h5>
                                <ul>
                                    <li><a class="white-text" href="#!">Link 1</a></li>
                                    <li><a class="white-text" href="#!">Link 2</a></li>
                                    <li><a class="white-text" href="#!">Link 3</a></li>
                                    <li><a class="white-text" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright ">
                        <div class="container">
                            Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                        </div>
                    </div>
                </footer>


            </div>
        );
    }
}

export default Inicio;