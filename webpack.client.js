const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
var webpack = require('webpack');

	// plugins: [
	//     new webpack.DefinePlugin({
	//       "process.env": {
	//         IS_BROWSER: "true"
	//       }
	//     })
	// ]

const clientConfig = {
	// tell webpack the root file of our client application
	entry: './src/client/client.js',

	// tell webpack where to put the output file
	// that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
	    new webpack.DefinePlugin({
	        "process.env": {
	            BROWSER: JSON.stringify(true)
	        }
	    }),
	    new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
	]
};

module.exports = merge(baseConfig, clientConfig);

// module.exports = {
// 	entry: './src/client/client.js',

// 	// tell webpack where to put the output file
// 	// that is generated
// 	output: {
// 		filename: 'bundle.js',
// 		path: path.resolve(__dirname, 'public')
// 	},
// 	plugins: [
// 	    new webpack.DefinePlugin({
// 	        "process.env": {
// 	            BROWSER: JSON.stringify(true)
// 	        }
// 	    }),
// 	    new webpack.DefinePlugin({
//             'process.env': {
//                 'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//             }
//         }),
//         new ExtractTextPlugin({
//         	filename:  "public/css/[name].css"
//         })
// 	],
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js?$/,
// 				loader: 'babel-loader',
// 				exclude: /node_modules/,
// 				options: {
// 					presets: [
// 						'react',
// 						'stage-0',
// 						['env', { targets: { browsers: ['last 2 versions'] }}]
// 					]
// 				}
// 			},
// 			{
// 		        test: /\.css$/,
// 		        use: ExtractTextPlugin.extract({
// 		        	use: [
// 		        		{
// 		        			loader: "css-loader",
// 		        			options: { importLoaders: 1}
// 		        		},
// 		        		{
// 		        			loader: "postcss-loader",
// 		        			options: { plugins: [autoprefixer()] }
// 		        		}
// 		        	]
// 		        })
// 		    }
// 		]
// 	}
// }

