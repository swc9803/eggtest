import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/home/Index'
import Home from '@/pages/Home'
import ProductLayout from '@/layouts/product/Index'
import Product from '@/pages/product/Product'
import Menu from '@/pages/product/Menu'

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/product',
    component: ProductLayout,
    children: [
      {
        path: '/product',
        name: 'Product',
        component: Product
      },
      {
        path: '/menu',
        name: 'Menu',
        component: Menu
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
