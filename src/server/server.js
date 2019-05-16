const app = require('./app');
const debug = require('debug')('myapp:server');
const http = require('http');
const express = require('express');
const path = require('path');

const publicDir = path.join(__dirname, '../../public');
const { port } = require("./config");
const sendFile = path.join(__dirname, '../../dist/index.html');



if (process.env.NODE_ENV === 'production') {
    /**
    * Implementacion de los css y js 
    */
    app.use("/public", express.static(publicDir));
    app.use(express.static(path.join(__dirname, '../../dist')));
    app.get('*', (req, res) => {
        res.sendFile(sendFile);
    });
}

//var port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

/**
* Create HTTP server.
*/
var server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
* Event listener for HTTP server "error" event.
*/
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
                ? 'Pipe ' + port
                : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
* Event listener for HTTP server "listening" event.
*/
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
    debug('Listening on ' + bind);
}