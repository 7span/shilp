import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: require("@/app").default,
      children: [
        {
          path: "",
          component: require("@/views/index").default,
          children: [
            {
              path: "text",
              component: require("@/views/demos/text").default
            },
            {
              path: "button",
              component: require("@/views/demos/button").default
            },
            {
              path: "blocks",
              component: require("@/views/demos/blocks").default
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
              path: "gaps",
              component: require("@/views/demos/gaps").default
            },
            {
              path: "colors",
              component: require("@/views/demos/colors").default
            }
          ]
        }
      ]
    }
  ]
});
