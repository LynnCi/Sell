// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import goods from './components/goods/Goods'
import ratings from './components/ratings/Ratings'
import seller from './components/seller/Seller'

// import 'common/stylus/index.styl'


Vue.config.productionTip = false

// Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// let app = Vue.extend(App);
// let router = new VueRouter({
//   linkActiveClass:'active'
// })

// router.map({
//   '/goods':{
//     component:goods
//   },
//   '/ratings':{
//     component:ratings
//   },
//   '/seller':{
//     component:seller
//   },
// })
