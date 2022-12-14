const path = require('path');
const { ProvidePlugin } = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer:{
        open: true,
        liveReload: true,
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'),
            serveIndex: true,
            watch: true,
        }
    },
    plugins: [
        new ProvidePlugin({
          React: "react" // automatically import react where needed
        })
    ],
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}