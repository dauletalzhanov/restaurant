const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const json5 = require('json5')

module.exports = {
	mode: "development",
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			title: 'Restaurant'
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
				  parse: json5.parse,
				},
			},
		],
	}
}