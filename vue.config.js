module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/styles/abstracts/_variables.scss";
            @import "@/styles/abstracts/_functions.scss";
            @import "@/styles/abstracts/_mixins.scss";
          `
      }
    }
  }
};
