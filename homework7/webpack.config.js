const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	context: __dirname,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
	entry: "./src/ts/index.ts",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: "./dist/"
	},
	module: {
		rules: [
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader','postcss-loader', 'sass-loader' ]
            },
			{
				test: /\.css$/,
				use: ['css-loader', 'style-loader', 'postcss-loader']
			},
			{

				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					query: {
                        presets: ["es2015"]
                    }
				}
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				use: [
					'file-loader?name=[name].[ext]', // to dist folder
					'image-webpack-loader'
				]
			},
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
		]
	},
	  plugins: [
    new UglifyJSPlugin({
		sourceMap: true,
		minimize: true,
		compress: {
			warnings: false
		}
	})
  ],
	devServer: {
		inline: true,
		port: 8080
	}
}