const publicPath = process.env.VUE_APP_PUBLIC_PATH;

const globalSassValues = [
  `@import "@/styles/_variables.scss"`,
];

module.exports = {
  publicPath: `${publicPath}`, // this will be referenced as BASE_URL in the public/index.html
  outputDir: 'dist/',
  filenameHashing: false, // use the version env-variable instead
  transpileDependencies: [
    '@rddev/web-components',
  ],
  configureWebpack: {
    output: {
      // https://dev.to/coolgoose/static--fixed-filenames-for-generated-vue-cli-builds-3a2l
      filename: 'js/[name].[hash:3].js',
      chunkFilename: 'js/[name].[hash:3].js',
    },
  },
  chainWebpack: (config) => {
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((match) => {
      config.module
        .rule('sass')
        .oneOf(match)
        .use('sass-loader')
        .tap((opt) =>
          Object.assign(opt, {
            prependData: globalSassValues.join('\n'),
          }));
    });

    config.plugins.delete('prefetch');
    config.plugins.delete('preload');

    /* stop injecting the css and js files into the document
     ** because we use init.js file instead
     */
    // config.plugin('html').tap((options) => {
    //   options[0].inject = false;
    //   return options;
    // });

    config.output.library('webpackJsonpOwnership');
    // config.output.filename(`js/[name].${version}.js`).chunkFilename(`js/[name].${version}.js`);
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `${globalSassValues.map((src) => `${src};`).join('\n')}`,
      },
    },
    extract: {
      filename: `css/[name].[hash:3].css`,
      chunkFilename: `css/[name].[hash:3].css`,
    },
  },
};