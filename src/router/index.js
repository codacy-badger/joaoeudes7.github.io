import Vue from 'vue'
import Router from 'vue-router'

// Components
const Profile = () => import(/* webpackChunkName: "group-foo" */ '../components/Profile.vue')
const Projects = () => import(/* webpackChunkName: "group-foo" */ '../components/Projects.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile
		},
		{
      path: '/Profile',
      name: 'Profile',
      component: Profile
		},
		{
      path: '/Projects',
      name: 'Projects',
      component: Projects
		},
		// {
    //   path: '/Contact',
    //   name: 'Project',
    //   component: Contact
		// },

  ]
})
