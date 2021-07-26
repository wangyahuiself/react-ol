const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const projectRoot = path.resolve(__dirname, './');

module.exports = {
    mode: 'production',

    entry: {
        index: './src/index.js' //对应src下的index.js
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "lib"), //这里一定要和package.json中的main对应
        libraryTarget: 'commonjs2'
    },
    resolve: {
        //配置在查找文件的过程中用到的后缀列表
        extensions: ['.js', 'jsx', '.less', '.css'],
        //如果webpack 在 resolve.root 或者 resolve.modulesDirectories 实在找不到某个模块了，会去这个目录中找
        //alias通过别名来把原导入路径映射成一个新的导入路径
        alias: {
            'src': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components'),
            'util': path.resolve(__dirname, './src/util'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: projectRoot,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.less$/, use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader?modules"
                }, {
                    loader: "less-loader",
                    options: {
                        minimize: true,
                        importLoaders: 1
                    }
                },
                    {
                        loader: 'postcss-loader', options: {
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
};
