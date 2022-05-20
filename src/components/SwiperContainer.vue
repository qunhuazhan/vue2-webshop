<template>
  <div class="swiperContainer">
    <img :src="showImg">
  </div>
</template>

<script>
export default {
  name: 'SwiperContainer',
  data () {
    return {
      showImgList : ['/static/show-img/1.jpg','/static/show-img/2.jpg'],
      showImg :'/static/show-img/1.jpg',
      index: 1,
      showInterval: null,
    }
  },
  methods:{
    
  },
  activated(){
    this.showInterval = setInterval(()=>{
      this.showImg = this.showImgList[this.index];
      if(this.index+1 < this.showImgList.length){
        this.index++
      }else{
        this.index = 0
      }
    }, 2800);  
  },
  deactivated(){
    clearInterval(this.showInterval);
  }

};

</script>

<style scoped>
  .swiperContainer{
    position: relative;
    bottom: 0;
    width: 100%;
    height: 550px;
    border: 1px #fff solid;
  }

</style>