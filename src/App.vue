<template>
  <div id="app">
    <HeadContainer/>
    <keep-alive :include="['NewProducts','SwiperContainer']">
        <router-view></router-view>
    </keep-alive>
    <FootContainer/>
  </div>
</template>

<script>
import HeadContainer from './components/HeadContainer.vue'
import FootContainer from './components/FootContainer.vue'
import SwiperContainer from './components/SwiperContainer.vue'
import NewProducts from './pages/NewProducts.vue'
import ProductInfo from './pages/ProductInfo.vue'

export default {
  name: 'App',
  components:{
    HeadContainer,
    FootContainer,
    SwiperContainer,
    NewProducts,
    ProductInfo
  },
  data(){
    return {
      
    }
  },
  methods:{

  },
  watch:{

  },
  mounted(){
    
  },
  beforeDestroy(){
    
  },

};
</script>

<style>
#app {
  position: relative;
  width: 71%;
  height: auto;
  margin: 0% 14.2%;
  border: 1px #fff solid;
  font-size: 14px;
  font-weight: 400;
  font-family: "宋体";
  color: #b1b0a3;
}
a{
  text-decoration: none;
  color: #b1b0a3;
}
img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}


</style>
