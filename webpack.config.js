const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    //was throwing warnings so i added mode
    mode: 'development',
    // for index.html 
    plugins: [
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }), 
    ],

    // need babel loader for React
    // no need transpile node_modules
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ "@babel/preset-env",
                        ['@babel/preset-react', {runtime: 'automatic'}],
                            ]}
                },
                resolve: { extensions: ['.jsx', '.js', '.json'], }
            },
            //for photos
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2500000
                    }
                }
            },
            //for css
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            
            //for fonts 
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                type: 'asset/resource',
              },
        ]
    }
};