import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: createElement => createElement(App),
  store, 
  router,
  //给Vue的原型对象绑定一个所有组件都能访问到的组件实例，作为事件总线bus
  //这个需要绑定的组件实例可以是当前应用的Vue实例vm本身，也可以去创建一个新的组件实例vc之类的，但没必要。
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})