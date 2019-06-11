import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: require("@/App").default
    },
    {
      path: "/demos",
      component: require("@/views/demos/").default,
      children: [
        {
          path: "button",
          component: require("@/views/demos/button").default
        },
        {
          path: "grid",
          component: require("@/views/demos/grid").default
        },
        {
          path: "input",
          component: require("@/views/demos/input").default
        },
        {
          path: "spacing",
          component: require("@/views/demos/spacing").default
        },
        {
          path: "colors",
          component: require("@/views/demos/colors").default
        }
      ]
    }
  ]
});
