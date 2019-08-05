import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import bookshelf from '@/components/bookshelf'
import search from '@/components/search'
import mine from '@/components/mine'
import homePage from '@/pages/homePage'
import ranking from '@/pages/ranking'
import classification from '@/pages/classification'
import free from '@/pages/free'
import bookDetail from '@/pages/book-detail'
import tab1 from '@/components/tab1'
import tab2 from '@/components/tab2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      // redirect: '/homePage'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'homePage',
          name: 'homePage',
          component: homePage,
        },
        {
          path: 'ranking',
          name: 'ranking',
          component: ranking
        },
        {
          path: 'classification',
          name: 'classification',
          component: classification,
          children: [
            {
              path: 'tab1',
              name: 'tab1',
              component: tab1
            },
            {
              path: 'tab2',
              name: 'tab2',
              component: tab2
            },
          ]
        },
        {
          path: 'free',
          name: 'free',
          component: free
        }
      ]
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: bookshelf
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    
    {
      path: '/bookDetail/:id',
      name: 'bookDetail',
      component: bookDetail,
      // component: resolve => require(['./pages/book-detail'], resolve),
      props: true
    },
    
    {
      path: '/home',
      redirect: '/homePage'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
