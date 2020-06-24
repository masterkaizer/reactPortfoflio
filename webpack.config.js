
// i have done this webpack and use babel thanks to a tutorial find on internet https://medium.com/@april9288/how-i-got-a-100-lighthouse-score-with-my-react-app-2b676ef62113 to make the performance in lightnhouse closser to 100
const path = require('path');
const HWP = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin'); //brotli

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
 output: {
     filename: 'build.js',
      path: path.join(__dirname, '/dist')},
      module: {
        rules: [
          {
            test: /\.m?jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', 'css'],
      }, 
    
   plugins:[
       new HWP(
          {template: path.join(__dirname,'/public/index.html')}
       ),
       new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 8192,
        minRatio: 0.8
        }),
        new BrotliPlugin({ //brotli plugin
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8
        }),
        new BundleAnalyzerPlugin()
   ]
 }