import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import Signup from '@/components/signup'
import Signin from '@/components/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      name: 'Signin',
      component: Signin
    }
  ]
})
