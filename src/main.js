import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import components
import PostsIndex from './components/posts/Index'
import PostsCreate from './components/posts/Create'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsIndex
    },
    {
      path: '/create',
      name: 'create',
      component: PostsCreate
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')