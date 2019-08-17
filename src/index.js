import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRutas from './routes';

ReactDOM.render(<Router>
    <AppRutas/>
</Router>, document.getElementById('root'));


