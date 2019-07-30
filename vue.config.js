module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        data: '@import "@/../scss/_globals.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@icon": "vue-material-design-icons"
      }
    }
  }
};
