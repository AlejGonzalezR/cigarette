import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRutas from './client/routes';


render(

    <Router>
            <AppRutas/>
    </Router>,
    document.getElementById('root')
);
