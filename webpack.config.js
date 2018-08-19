const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
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
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
}

module.exports = (env,argv) => {
	let devMode = argv.mode === 'development',
		scssRule = {
			test: /\.scss$/,
			exclude:path.resolve(__dirname, 'src/css'),
			use: [
				devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
				'css-loader?modules',
				'sass-loader'
			]
		},
		includeRule = {
			test: /\.scss$/,
			include:path.resolve(__dirname, 'src/css'),
			use: [
				devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			]
		}

	// if(argv.mode === 'development'){}
	// if(argv.mode === 'production'){}

	if(devMode){
		config.devtool = 'source-map'
	}else{

	}

	config.module.rules.push(scssRule)
	config.module.rules.push(includeRule)

	return config
}