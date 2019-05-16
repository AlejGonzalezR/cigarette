const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, 
         {
            test: /\.(pdf|jpg|png|gif|svg|ico|woff|woff2|eot|ttf)$/,
            loader: "url-loader?limit=100000"
        },{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    },
    devServer: {
        historyApiFallback: true,
        port: 5000,
        proxy: {
            "/api-rest": {
                "target": "http://localhost:8000",
                "secure": false,
                "changeOrigin": true
            }
        },
        disableHostCheck: true,
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
        alias: {
            grant_css : path.join(__dirname, '/node_modules/react-vis/dist/style.css'),
            // materialize: path.resolve(__dirname, '/node_modules/materialize-css/dist'),
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ]
};
