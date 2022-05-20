<template>
  <div class="productInfo">
    <div class="product-img-box">
      <div class="display-img-box">
        <img :src="productObj.main_img" @mousemove="enlargeBox"/>
        <div class="zoom-min-box"></div>
        <div class="zoom-max-box"><img/></div>
      </div>

      <div class="all-img-box" v-for="detail_img in productObj.detail_imgs" @click="changeImg(detail_img)">
        <img :src="detail_img" />
      </div>
    </div>
    
    <div class="product-info-box">
       <div class="product-info">
         <div class="product-name">
           <h1>{{productObj.name}}</h1>
         </div> 
         <div class="price-box">
           <b><span id="product-price">
             ￥{{productObj.price}}
           </span></b>
         </div>
         <div class="add-collect-box">
           <router-link :to="{
            name: 'Login'
           }">
             <div class="add-collect-icon">
               <img src="../../static/icon/add-collect.jpg"/>
             </div>
             <div class="add-collect-text">
               <span>收藏</span>
             </div>
           </router-link>
         </div>
         <div class="description-box">
            <p class="description">
              {{productObj.description}}
              <br>
            </p>
            
            <p class="fabrics">
              <b>面料：</b>
              {{productObj.fabrics}}
              <br>
            </p>
            <p class="size">
              <b>尺寸：</b>
              衣长:{{productObj.size.length}}，胸围：{{productObj.size.width}}
              <br>
            </p>
         </div>
         <div class="add-cart-box">
          <div class="add-count">
            <label>数量:</label>
            <div class="select-box">
              <select id="count-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <router-link :to="{
            name: 'Login'
           }">
            <div class="add-cart">
              <span>加入购物车</span>
            </div>
          </router-link>
         </div>
       </div>
    </div>
 
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: ['id','name','productObj'],
  data () {
    return {

    }
  },
  methods:{
    //点击左侧小图切换为displayImg
    changeImg(detail_img){
      var allImgsBox = document.querySelector('.all-img-box');
      var displayImg = document.querySelector('.display-img-box').children[0];
      //点击左侧小图切换为displayImg
      displayImg.src = detail_img;
    },
    //放大镜效果的实现
    enlargeBox(e){
      var headContainer = document.querySelector('.headContainer');
      var productInfo = document.querySelector('.productInfo');
      var productImgBox = document.querySelector('.product-img-box');
      var displayImg = document.querySelector('.display-img-box').children[0];
      var zoomMinBox = document.querySelector('.zoom-min-box');
      // 大盒子不实际移动，通过移动大盒子里的大图片达到移动盒子的效果
      var zoomMaxBox = document.querySelector('.zoom-max-box');
      var zoomMaxBoxImg = zoomMaxBox.children[0];
      
      //////////////////////////////////////
      zoomMinBox.style.display = "block";
      zoomMaxBox.style.display = "block";
      //2.1、小盒子的移动
      //获取主图的宽高
      var displayImgWidth = displayImg.offsetWidth;
      var displayImgHeight = displayImg.offsetHeight;
      //获取宽高
      var zoomMinBoxWidth = zoomMinBox.offsetWidth;
      var zoomMinBoxHeight = zoomMinBox.offsetHeight;
      //设置小盒子的位置
      var minBox_left = e.pageX - productInfo.offsetParent.offsetLeft - zoomMinBoxWidth/2 ;
      var minBox_top = e.pageY - headContainer.offsetHeight - zoomMinBoxHeight/2;

      //设置小镜头zoom-lens的最大移动距离
      var minBox_maxLeft = displayImgWidth - zoomMinBoxWidth;
      var minBox_maxTop = displayImgHeight - zoomMinBoxHeight;

      if(minBox_left < 0){
        minBox_left = 0;
      }
      if (minBox_left > minBox_maxLeft) {
        minBox_left = minBox_maxLeft; 
      }
      if(minBox_top < 0){
        minBox_top = 0;
      }
      if (minBox_top > minBox_maxTop) {
        minBox_top = minBox_maxTop;
      }
      zoomMinBox.style.left = minBox_left +'px';
      zoomMinBox.style.top = minBox_top +'px';

      //2.2、大盒子展示放大的图片：大盒子里装着放大的图片，通过移动大盒子里的大图片在大盒子中的位置（与小盒子（镜头）在小图片中移动的值的比例相同），达到放大displayImg的效果。
      zoomMaxBoxImg.src = displayImg.src;
      //获取大盒子的最大移动距离
      var maxBox_maxLeft = zoomMaxBoxImg.offsetWidth - zoomMaxBox.offsetWidth ;
      var maxBox_maxTop = zoomMaxBoxImg.offsetHeight - zoomMaxBox.offsetHeight;
      //3、获取大盒子与小盒子的最大移动的比例
      var kx = maxBox_maxLeft / minBox_maxLeft;
      var ky = maxBox_maxTop / minBox_maxTop;
      // console.log(zoomMaxBoxImg.offsetWidth, zoomMaxBox.offsetWidth)
      //4、设置大盒子的图片的移动距离
      zoomMaxBoxImg.style.left = -minBox_left*kx + 'px';
      zoomMaxBoxImg.style.top = -minBox_top*ky + 'px';
      //
      displayImg.addEventListener('mouseleave', function(){
        zoomMinBox.style.display = "none";
        zoomMaxBox.style.display = "none";
      });
    },

  },
  mounted(){
    
  }

};

</script>

<style scoped>
.productInfo{
    position: relative;
    width: 100%;
    height: auto;
    border: 1px #fff solid;
    color: #000;
  }
.product-img-box{
  position: relative;
  width: 50%;
  height: 500px;
  border: 1px #fff solid;
}
.display-img-box{
  float: left;
  position: relative;
  width: 85%;
  height: 100%;
}
.all-img-box{
  position: relative;
  left: 4px;
  float: left;
  width: 10%;
  height: 15%;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.zoom-min-box{
  display: none;
  position: absolute;
  width: 120px;
  height: 120px;
  top: 0;
  left: 0;
  background-color: #ccc;
  opacity: .2;
  pointer-events: none; /*解决遮罩bug、冒泡之类导致的*/
  z-index: 9999;
}

.zoom-max-box{
  display: none;
  position: absolute;
  width: 134%;
  height: 80%;
  top: 0;
  left: 101%;
  overflow: hidden;
  z-index: 9999;
}
.zoom-max-box img{
  position: absolute;
  width: 1000px;
  height: 1500px;
}

.product-info-box{
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 500px;
  border: 1px #fff solid;
  overflow: hidden;
}
.product-info{
  position: relative;
  width: 100%;
  height: 100%;
  left: 10px;
  border: 1px #fff solid;
}
.product-name{
  position: relative;
  top: -12px;
  font-size: 9px;
  color: #000;
}
.price-box{
  position: relative;
  width: 100%;
  top: -12px;
  font-size: 13px;
  color: #b1b0a3;
}
.add-collect-box{
  position: relative;
  width: 30%;
  height: 35px;
  margin-top: 20px;
  border: 1px #aba6a2 solid;
}

.add-collect-icon{
  position: relative;
  width: 50%;
  height: 100%;
}
.add-collect-icon img{
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.add-collect-text{
  position: absolute;
  width: 50%;
  height: 100%;
  left: 50%;
  top: 0;
  line-height: 100%;
  text-align: center;
  color: #000;
}
.add-collect-text span{
  display: inline-block;
  vertical-align: middle;
  line-height: 2.8;
  font-size: 13px;
}
.add-cart-box{
  position: relative;
  width: 42%;
  height: 60px;
  margin-top: 20px;
}
.add-count{
  position: relative;
  width: 30%;
  height: 100%;
  font-size: 13px;
}
.select-box{
  position: relative;
  width: 100%;
  height: 60%;
  background-color: #ece7e4;
  top: 7px;
  border: 1px #aba6a2 solid;
}
#count-select{
  position: relative;
  width: 100%;
  top: 5px;
  background-color: #ece7e4;
  background-image: none !important;
  filter: none !important;
  border: 1px solid #ece7e4;
  outline: none;
  height: 25px !important;
  line-height: 25px;
 }
.add-cart{
  position: absolute;
  left: 40%;
  top: 37.5%;
  width: 60%;
  height: 60%;
  line-height: 60%;
  border: 1px #aba6a2 solid;
  background-color: #000;
  color: #fff;
  text-align: center;
}
.add-cart span{
  display: inline-block;
  vertical-align: middle;
  line-height: 2.8;
  font-size: 13px;
}

</style>