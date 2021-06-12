import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  treeShake: true,
  theme: {
    themes: {
      light: {
        Cgreen: "#87c641",
        "green-light-200": "#f3f9ec",
        "grey-light-100": "#eff6e6",
      },
    },
  },
});
