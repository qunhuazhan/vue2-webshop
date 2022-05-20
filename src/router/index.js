import Vue from 'vue'
import Router from 'vue-router'
import ProductInfo from '../pages/ProductInfo'
import NewProducts from '../pages/NewProducts'
import Login from '../components/Login'
import ShopCart from '../components/ShopCart'
import SwiperContainer from '../components/SwiperContainer'
 
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: SwiperContainer,
    },
    {
      name:'Login',
      path: '/login',
      component: Login,
    },
    {
      name:'ShopCart',
      path: '/shop-cart',
      component: ShopCart,
    },
    {
      name:'NewProducts',
      path: '/new-products',
      component: NewProducts,
    },
    {
      name:'ProductInfo',
      path: '/new-products/product-info/:name',
      component: ProductInfo,
      props($route){
        return {
          id: $route.params.id,
          name: $route.params.name,
          productObj: $route.params.productObj
        }
      },
      meta:{isAuth:false},
      beforeEnter: (to, form, next)=>{
        if(!to.meta.isAuth){
          next()
        }
      },
    }
  ]
})

export default router