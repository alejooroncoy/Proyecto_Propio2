const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PwaManifestPlugin = require('webpack-pwa-manifest');
const WorboxWebpack = require('workbox-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader',
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
        port: 8282,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        new PwaManifestPlugin({
            short_name: "Cervezería Wilmer", 
            name: "Buena elección, Cervezero",
            description: 'Las mejores Cervezas',
            inject: true,
            icons: [
                {
                    src: path.resolve('./public/icon.png'),
                    sizes: [96,128,192,256,1024],
                    destination: path.join('icons', 'ios'),
                    ios: true,
                    ios: "startup",
                    type: "image/png"
                },
            ],
            start_url: "/",
            prefer_related_applications: false,
            scope: "/",
            display: "standalone",
            related_applications: [],
            theme_color: "#f3c614",
            background_color: "#f3c614",
            ios: {
                "apple-mobile-web-app-title":'Cervezería Wilmer',
                "apple-mobile-web-app-status-bar-style": 'black-translucent',
                "apple-mobile-web-app-capable": 'yes',
            }
        }),
         new WorboxWebpack.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://cervew-eb41d.firebaseapp.com/'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api'
                    },
                },
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

                    handler: 'CacheFirst',
            
                    options: {

                      cacheName: 'images',
            
                      expiration: {
                        maxEntries: 15,
                      },
                    },
                },
                {
                    urlPattern: /\.(?:ogg|mp3|wav|mpe?g)$/,
                    handler: 'CacheFirst',
            
                    options: {
                      cacheName: 'songs',
            
                      expiration: {
                        maxEntries: 2,
                            },
                    }
                },
            ]
        }),
    ] 
}