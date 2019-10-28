import React, { Component } from 'react';

export default class Intro extends Component {
    render() {
        return (
            <div className="row ">
                <div className=" valign-wrapper ">
                <div className="col s12 m12 l6 lx6  center-align">
                <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="imgsize-intro materialboxed" alt=""/>
                </div>
                <div className="col s12 m12 l6 lx6   justify-align">
                <p><span className="span-titulo"></span> <span>El pasaje estándar Lorem Ipsum, usado desde el año 1500.</span></p>

                <p className="fa">
                El pasaje estándar Lorem Ipsum, usado desde el año 1500.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
</div>
</div>
            </div>
        );
    }
}
