const path = require('path');

module.exports = {
    entry: {
        'content-script': './dist/content-scripts/index.js',
        'service-worker': './dist/service-worker/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],  // Recognize these file extensions
    },
    module: {
        rules: [
            {
                test: /\.ts$/,  // Process .ts files with ts-loader
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development'
};
