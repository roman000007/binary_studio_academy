var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "inline-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			},
            {
				enforce: "pre",
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				loader: "postcss-loader"
			},
			{

				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				use: [
					'file-loader?name=[name].[ext]',
					'image-webpack-loader'
				]
			},
            {
            test: /\.(css|scss)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
        output: {comments: false},
		minimize: true,
		compress: {
			warnings: false
		}
	})],
	devServer: {
		inline: true,
		port: 8080
	}
}