const express = require('express');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');

const { env } = require("./config");

/**
 * [MIDDLEWARES]
 */
const isAuthMiddleware = require("./lib/middlewares/auth");

/**
 * [ROUTES]
 */
const bookRoutes = require("./lib/routes/books");
const authRoutes = require("./lib/routes/auth");

const app = express();

/**
 * Parsing request data
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Removing critical headers
 */
app.use(helmet({
    noCache: false
}));

app.use(cors());

app.get("/api-rest/", (req, res) => {
    res.json({
        status: "success",
        message: "API BOOKS v1"
    });
});

app.use("/api-rest/books", isAuthMiddleware, bookRoutes);
app.use("/api-rest/auth", authRoutes);

if (env === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

/**
 * production error handler
 * no stacktraces leaked to user
 * 
 */
app.use((err, req, res, next) => {
   
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;
