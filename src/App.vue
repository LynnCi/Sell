<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
<!--    <div class="content">i am content</div>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/Header'
  const ERR_OK = 0;

  export default {
    name: 'App',
    data() {
      return{
        seller:{}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.json();
        if(response.errno === ERR_OK){
          this.seller = response.data;
          console.log(this.seller)
        }
      })
    },
    components:{
      'v-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./common/stylus/mixin.styl"

  #app
    .tab
      display :flex
      width:100%
      height:40px;
      line-height:40px
      .tab-item
        flex:1
        text-align:center


</style>
