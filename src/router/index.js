import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import SubmitReview from '@/components/SubmitReview'
import ProductDetail from '@/components/ProductDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/ProductList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/submit-reviews',
      name: 'SubmitReviews',
      component: SubmitReview
    },
    { path: '/product/:productCode', name: 'product', component: ProductDetail, props: true },
    {
      path: '*',
      component: ProductList
    }
  ]
})
