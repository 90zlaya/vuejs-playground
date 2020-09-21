import data from './../mixins/data.js';
import pages from './../mixins/pages.js';

import Vue from 'vue';
import Router from 'vue-router';
import Home from './../views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: data.routerRoutes.home.path,
      name: data.routerRoutes.home.name,
      component: Home
    },
    {
      path: data.routerRoutes.fourZeroFour.path,
      name: data.routerRoutes.fourZeroFour.path,
      component: () => import(/* webpackChunkName: "character" */ './../views/404.vue'),
      beforeEnter: (to, from, next) => {
        // Overwrite path if redirected
        if (to.redirectedFrom) {
          window.location.href = data.routerRoutes.fourZeroFour.path;
        } else {
          next();
        }
      }
    },
    {
      path: data.routerRoutes.character.path,
      name: data.routerRoutes.character.name,
      component: () => import(/* webpackChunkName: "character" */ './../views/Character.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        // Validate character route
        if (pages.map(page => page.page_name).includes(to.params.pageName)) {
          next();
        } else {
          window.location.href = data.routerRoutes.fourZeroFour.path;
        }
      }
    },
    {
      path: '/*',
      redirect: data.routerRoutes.fourZeroFour.path
    }
  ]
});
