import Vue from "vue";
import Router from "vue-router";

import home from "../components/HelloWorld.vue";
import Portfolio from "../components/Portfolio.vue";
import Project from "../components/Project.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/Portfolio",
      component: Portfolio
    },
    {
      path: "/Project",
      component: Project
    }
  ]
});
