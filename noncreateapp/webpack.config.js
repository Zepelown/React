const path = require('path');
const webpack = require('webpack')
//노드에서 지원하는 경로 지원 모듈

module.exports = {
	name: 'wordrelay-setting',
	mode: 'development', //실서비스 : production
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx']
		//확장자는 여기서 미리 처리하여 밑에 entry에서 확장자 생략이 가능하다.
	},
	
	entry: {
		app: ['./client']
		//client.jsx가 WordRelay불러오기 때문에 입력할 필요가 없다.
		
	}, // 입력
	
	module: {
		rules: [{
			test: /\.jsx?/,
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env',{
						targets: {
							browsers: ['> 1% in KR',
									   'last 2 chrome versions'],
							node: 'current',
						},
						debug: true,
					}],
					'@babel/preset-react'
				],
				plugins: []
			}
		}]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],
	output: {
		path: path.join(__dirname, 'dist'), // C:\users\noncreateapp\와 경로를 만들어주는 방식
		filename: 'app.js'
	}, // 출력
	
};