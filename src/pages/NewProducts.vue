<template>
  <div class="newProducts">
    <div class="product" v-for="product in newProductList" :key="product.id">
      
      <div class="product-pic">
        <router-link :to="{
          name:'ProductInfo',
          params:{
            name:product.name,
            productObj:product
          }
        }">
          <img :src="product.main_img">
        </router-link>
      </div>

      <div class="product-info">
        <router-link :to="{
          name:'ProductInfo',
          params:{
            name:product.name,
            productObj:product
          }
        }">
          <p class="product-name">{{product.name}}</p>
        </router-link>
        
        <div class="product-price">
          <span id="product-price">￥ {{product.price}}</span>
        </div> 
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NewProducts',
  data () {
    return {
      newProductList:[
      {
        id:'001',
        name:'aaaa',
        price:'110',
        main_img:'/static/product-img/1_0.jpg',
        detail_imgs:['/static/product-img/1_0.jpg','/static/product-img/1_1.jpg','/static/product-img/1_2.jpg','/static/product-img/1_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'40cm', width:'68cm'}
       },
      {
        id:'002',
        name:'bbbb',
        price:'120',
        main_img:'/static/product-img/2_0.jpg',
        detail_imgs:['/static/product-img/2_0.jpg','/static/product-img/2_1.jpg','/static/product-img/2_2.jpg','/static/product-img/2_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'42cm', width:'63cm'}
       },
       {
        id:'003',
        name:'cccc',
        price:'130',
        main_img:'/static/product-img/3_0.jpg',
        detail_imgs:['/static/product-img/3_0.jpg','/static/product-img/3_1.jpg','/static/product-img/3_2.jpg','/static/product-img/3_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'44cm', width:'62cm'}
       },
       {
        id:'004',
        name:'dddd',
        price:'140',
        main_img:'/static/product-img/4_0.jpg',
        detail_imgs:['/static/product-img/4_0.jpg','/static/product-img/4_1.jpg','/static/product-img/4_2.jpg','/static/product-img/4_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'46cm', width:'63cm'}
       },
       {
        id:'005',
        name:'aaaa',
        price:'110',
        main_img:'/static/product-img/1_0.jpg',
        detail_imgs:['/static/product-img/1_0.jpg','/static/product-img/1_1.jpg','/static/product-img/1_2.jpg','/static/product-img/1_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'40cm', width:'68cm'}
       },
      {
        id:'006',
        name:'bbbb',
        price:'120',
        main_img:'/static/product-img/2_0.jpg',
        detail_imgs:['/static/product-img/2_0.jpg','/static/product-img/2_1.jpg','/static/product-img/2_2.jpg','/static/product-img/2_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'42cm', width:'63cm'}
       },
       {
        id:'007',
        name:'cccc',
        price:'130',
        main_img:'/static/product-img/3_0.jpg',
        detail_imgs:['/static/product-img/3_0.jpg','/static/product-img/3_1.jpg','/static/product-img/3_2.jpg','/static/product-img/3_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'44cm', width:'62cm'}
       },
       {
        id:'008',
        name:'dddd',
        price:'140',
        main_img:'/static/product-img/4_0.jpg',
        detail_imgs:['/static/product-img/4_0.jpg','/static/product-img/4_1.jpg','/static/product-img/4_2.jpg','/static/product-img/4_3.jpg'],
        description: 'some description description description description description description description...',
        fabrics: '100%纯棉',
        size: {length:'46cm', width:'63cm'}
       },
      ]


    }
  },
  methods:{
    
  }

};

</script>

<style scoped>
  .newProducts{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border: 1px #fff solid;
  }
  .product{
    position: relative;
    width: 24%;
    height: 391px;
    border: 1px #fff solid;
    margin-bottom: 20px;
  }
  .product-pic{
    width: 100%;
    height: 82.3%;
    overflow: hidden;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .product-info{
    width: 100%;
    height: 17.7%;
    overflow: hidden;
  }
  .product-name{
    margin-top: 26px;
    text-align: center;
    font-size: 14px;
    font-family: "Georgia";
    color: #000;
  }
  .product-price{
    margin-top: -8px;
    text-align: center;
    font-size: 10px;
    font-family: "ZapfHumnst Ult BT";
  }


</style>