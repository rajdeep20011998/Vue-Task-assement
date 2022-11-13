import Vue from 'vue'
import Router from 'vue-router'
import UserData from   '@/components/UserData'
import Header from '@/components/Header'
import ViewUserData from '@/components/ViewUserData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/UserData',
      name: 'UserData',
      component: UserData
    },
    {
      path:'/',
      name:'Header',
      component:Header
    },
    {
      path:'/ViewUserData',
      name:'ViewUserData',
      component:ViewUserData
    },
    
  ]
})
    