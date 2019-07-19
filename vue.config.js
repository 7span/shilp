module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        implementation: require("sass")
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
