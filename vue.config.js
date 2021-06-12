module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map",
  },
  css: {
    loaderOptions: {
      scss: {
        // 8.0.3
        prependData: `@import "@/scss/variables.scss";`,
      },
    },
  },
  runtimeCompiler: true,
};
