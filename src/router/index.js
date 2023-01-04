import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from, next) =>{
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if(!user){
    next({name: 'welcome'})
  }
  else{
    next()
  }
  
}

const requireNoAuth = (to, from, next) =>{
  let user = projectAuth.currentUser
  if(user){
    next({name:'chatroom'})

  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
