import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Layout/Home'
  },
  {
    path: '/Layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/Layout/Home',
        component: () => import('@/views/Home')
      },
      {
        path: '/Layout/House',
        component: () => import('@/views/House')
      },
      {
        path: '/Layout/Message',
        component: () => import('@/views/Message')
      },
      {
        path: '/Layout/Admin',
        component: () => import('@/views/Admin')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
