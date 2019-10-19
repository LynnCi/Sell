import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/header/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'head',
      component: Head
    }
  ]
})
