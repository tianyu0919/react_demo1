const { override, addWebpackResolve, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackResolve({
    alias: {
      '@': path.join(__dirname, './src'),
      '@views': path.join(__dirname, './src/views'),
      '@components': path.join(__dirname, './src/components'),
      '@utils': path.join(__dirname, './src/utils'),
      '@assets': path.join(__dirname, './src/assets'),
      // "@base": path.join(__dirname, '')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // * 引入的时候可以省略这些后缀
  }),
  addWebpackModuleRule({
    test: /\.(scss|sass)$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 3,
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              browsers: 'last 2 versions',
              // autoprefixer: {
              //   flexbox: 'no-2009',
              // },
              stage: 4,
            }),
          ],
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
        },
      },
    ],
    exclude: /node_modules/,
  })
);
