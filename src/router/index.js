import Vue from 'vue';
import Router from 'vue-router';

// Components
const Profile = () => import(/* webpackChunkName: "group-foo" */ '../components/Profile.vue');
const Projects = () => import(/* webpackChunkName: "group-foo" */ '../components/Projects.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
  ],
});

