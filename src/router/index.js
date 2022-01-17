import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/home/Index'
import ProductLayout from '@/layouts/product/Index'
import Home from '@/pages/Home'
import Product from '@/pages/product/ProductHome'
import Egg from '@/pages/product/menu/Egg'
import Begg from '@/pages/product/menu/Begg'
import Megg from '@/pages/product/menu/Megg'
import Salad from '@/pages/product/menu/Salad'
import Sand from '@/pages/product/menu/Sand'
import Pevent from '@/pages/product/event/Pevent'
import Levent from '@/pages/product/event/Levent'
import Notice from '@/pages/product/notice/Notice'
import Location from '@/pages/product/cs/Location'
import Faq from '@/pages/product/cs/Faq'

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
        path: '/menu/egg',
        name: 'Egg',
        component: Egg
      },
      {
        path: '/menu/begg',
        name: 'Begg',
        component: Begg
      },
      {
        path: '/menu/salad',
        name: 'Salad',
        component: Salad
      },
      {
        path: '/menu/megg',
        name: 'Megg',
        component: Megg
      },
      {
        path: '/menu/sand',
        name: 'Sand',
        component: Sand
      },
      {
        path: '/event/pevent',
        name: 'Pevent',
        component: Pevent
      },
      {
        path: '/event/levent',
        name: 'Levent',
        component: Levent
      },
      {
        path: '/notice',
        name: 'Notice',
        component: Notice
      },
      {
        path: '/cs/location',
        name: 'Location',
        component: Location
      },
      {
        path: '/cs/faq',
        name: 'Faq',
        component: Faq
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
