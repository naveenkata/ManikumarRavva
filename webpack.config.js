var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_dir = __dirname + '/node_modules';
var stylePathResolves = ('includePaths[]=' + path.resolve('./') + '&'
		+ 'includePaths[]=' + path.resolve('./node_modules'))

module.exports = {
	entry : [ './src/main/resources/templates/index.js' ],
	output : {
		/*
		 * path: path.resolve(__dirname, './build'), filename: 'app.bundle.js',
		 */
		path : __dirname,
		filename : './src/main/resources/static/built/bundle.js'
	},
	module : {
		rules : [
				/*
				 * { test: /\.html$/, loader: 'file-loader?name=[name].[ext]', },
				 */
				{
					test : /\.(js|jsx)$/,
					exclude : /node_modules/,
					loader : 'babel-loader',
					query : {
						presets : [ 'es2015', 'react' ]
					}
				},
				{
					test : /\.css$/,
					loader : "style-loader!css-loader"
				},
				{
					test : /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
					loader : 'file-loader'
				},
				{
					test : /\.scss$/,
					loader : ExtractTextPlugin
							.extract('style', 'saas', 'css'
									+ '!sass?outputStyle=expanded&'
									+ stylePathResolves)
				} ],
	},
	plugins : [ new ExtractTextPlugin({
		filename : '[name].css'
	}) ]
/*
 * plugins: [ new webpack.NamedModulesPlugin(), ]
 */
};