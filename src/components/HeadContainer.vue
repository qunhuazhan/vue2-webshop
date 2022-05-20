<template>
  <div class="headContainer">
    <div class="navbar-top">
      <div class="topleft-nav">
        <div class="topbar-message">
          作者：詹群华
        </div>
        <div class="search-div">
          <form>
            <input type="text" id="search-product" name="product-name" placeholder="全店搜索...">
          </form>
        </div>
      </div>

      <div class="topright-nav">
        <div class="search-link">
          <img src="../../static/icon/search.jpg"/>
        </div>

        <div class="account-menu">
          <img src="../../static/icon/menu.jpg"/>
        </div>

        <router-link :to="{
            name: 'Login'
           }">
          <div class="sign-in">登入</div>
        </router-link>

        <router-link :to="{
            name: 'ShopCart'
           }">
          <div class="shop-cart">
            <img src="../../static/icon/cart.jpg"/>
          </div>
        </router-link>
      </div>
    </div>

    <div class="navbar-logo">
      <div class="logo">
        <router-link to="/">
          <div class="click-logo"></div>
        </router-link>
        <img src="../../static/icon/logo.jpg"/>
      </div>
    </div>
    
    <div class="navbar-memu">
      <ul class="nav">
        <li>
          <router-link :to="{
            name:'NewProducts'
          }">新款上架</router-link>
        </li>
        <li>
          <router-link :to="{
            name:'NewProducts'
          }">基本款</router-link>
        </li>
        <li>
          <router-link :to="{
            name:'NewProducts'
          }">服装</router-link>

        </li>
        <li>
          <router-link :to="{
            name:'NewProducts'
          }">图案</router-link>
        </li>
        <li>
          <router-link :to="{
            name:'NewProducts'
          }">饰品</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadContainer',
  data () {
    return {
      
    }
  },
  methods:{
    
  }

};

</script>

<style scoped>
  .headContainer{
    position: relative;
    width: 100%;
    height: 133px;
    border: 1px #fff solid;
    z-index: 9999;
  }
  .navbar-top{
    position: relative;
    width: 100%;
    height: 18%;
    overflow: hidden;
  }
  .topleft-nav{
    position: absolute;
    width: 80%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  .topbar-message{
    position: absolute;
    left: 15px;
    top: 0;
    width: 65%;
    height: 100%;
    float: left;
    margin-top: 5px;
    font-style:oblique;
  }
  .search-div{
    position: absolute;
    left: 65%;
    top: 0;
    width: 35%;
    height: 100%;
    clear: both;
  }
  input{
    position: relative;
    width: 100%;
    height: 23px;
    outline-style: none;
    border: 0px solid #ece7e4;
    background-color: #ece7e4;
    font-style:oblique;
    font-size: 14px;
    font-weight: 400;
    font-family: "宋体";
  }
  input:focus{
    color: #757070;
  }
  .topright-nav{
    position: absolute;
    left: 80%;
    top: 0;
    width: 20%;
    height: 100%;
    margin-right: 15px;
    display: flex;
    justify-content: space-around;
    float: right;
    overflow: hidden;
  }

  .search-link, .account-menu{
    margin-top: 4px;
    width: 16px;
    height: 16px;
    background-color: red;
  }
  .shop-cart{
    margin-top: 2px;
    width: 13px;
    height: 17px;
  }
  .sign-in{
    font-size: 13px;
    margin-top: 5px;
  }
  .topright-nav img{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .navbar-logo{
    position: relative;
    width: 100%;
    height: 50%;
  }
  .logo{
    position: relative;
    width: 40%;
    margin-left: 30%;
    height: 100%;
  }
  .click-logo{
    position: absolute;
    width: 69%;
    height: 40%;
    left: 15%;
    top: 30%;
  }
  .logo img{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .navbar-memu{
    width: 100%;
    height: 20%;
    font-size: 14px;
  }
  .nav{
    margin: 0;
    padding: 0;
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-left: 7.8%;
    margin-right: 7.8%;
  }
  .nav > li{
    list-style-type: none;
  }
  a{
  text-decoration: none;
  color: #c1a7ab;
  font-size: 14px;
  }

</style>