import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/page/Index.vue')
const News = () => import('@/page/News.vue')
const Counter = () => import('@/page/Counter.vue')
const About = () => import('@/page/About.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
