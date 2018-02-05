var webpack = require('webpack');
		// plugins: [
		//     new webpack.DefinePlugin({
		//         "process.env": {
		//             BROWSER: JSON.stringify(true)
		//         }
		//     })
		// ]

module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					]
				}
			},
			{
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader' ]
		    }
		]
	}
};

