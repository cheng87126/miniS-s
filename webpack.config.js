const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
	entry:'./src/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			}
		]
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			ilename: './index.html',
			template: './index.html',
			inject: true
		})
	]
}









module.exports = (env,argv) => {
	if(argv.mode === 'development'){
		config.devtool = 'source-map'
	}
	if(argv.mode === 'production'){

	}
	return config
}