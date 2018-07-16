const path = require('path');

module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'), 
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, 
            exclude: /node_modules/
        }, {
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ], 
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
        // This is to setup server side to always return index.html and let React Router figure out what to show from there(via client side).
    }
}