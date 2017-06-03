module.exports = {
    entry: {
        main: './main.js'
    },

    output: {
        filename: './dist/scripts/main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                loader: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devServer: {
        inline: true,
        port: 8080
    }
}