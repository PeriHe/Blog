import Vue from 'vue'
import Router from 'vue-router'
import Artical from '@/views/artical/artical'
import TimeLine from '@/views/timeLine/timeLine'
import About from '@/views/about/about'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Artical',
      component: Artical
    },
    {
      path:'/archives',
      name:'TimeLine',
      component:TimeLine
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/*',
      component: Artical
    }
  ]
})
