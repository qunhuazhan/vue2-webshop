<template>
  <div class="footContainer">
    <div class="copyright">
      <span>design by zhanqunhua</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootContainer',
  data () {
    return {
      
    }
  },
  methods:{
    
  }

};

</script>

<style scoped>
  .footContainer{
    position: relative;
    bottom: 0;
    width: 100%;
    height: 150px;
    border: 1px #fff solid;
  }
  .copyright{
    position: relative;
    width: 100%;
    top: 120px;
    text-align: center;
    font-family: "Georgia";
  }

</style>