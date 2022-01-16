import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/home/Index'
import ProductLayout from '@/layouts/product/Index'
import AuthenticationLayout from '@/layouts/authentication/Index'
import Home from '@/pages/Home'
import Product from '@/pages/product/ProductHome'
import Menu from '@/pages/product/menu/Menu'
import Egg from '@/pages/product/menu/Egg'
import Begg from '@/pages/product/menu/Begg'
import Megg from '@/pages/product/menu/Megg'
import Salad from '@/pages/product/menu/Salad'
import Sand from '@/pages/product/menu/Sand'
import Eventp from '@/pages/product/event/Eventp'
import Pevent from '@/pages/product/event/Pevent'
import Levent from '@/pages/product/event/Levent'
import Notice from '@/pages/product/notice/Notice'
import CS from '@/pages/product/cs/CS'
import Location from '@/pages/product/cs/Location'
import Inquire from '@/pages/product/cs/Inquire'
import Faq from '@/pages/product/cs/Faq'
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'

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
        path: '/eventp',
        name: 'Eventp',
        component: Eventp
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
        path: '/cs',
        name: 'CS',
        component: CS
      },
      {
        path: '/cs/location',
        name: 'Location',
        component: Location
      },
      {
        path: '/cs/inquire',
        name: 'Inquire',
        component: Inquire
      },
      {
        path: '/cs/faq',
        name: 'Faq',
        component: Faq
      }
    ]
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
