<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/main/home" name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/main/recover" name="recover" icon="search">分类</van-tabbar-item>
    <van-tabbar-item to="/main/eatbar" name="eatbar" icon="smile-o">吃饭吧</van-tabbar-item>
    <van-tabbar-item to="/main/order" name="order" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/main/mine" name="mine" icon="setting-o">我的易果</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: location.href.slice(29)
    };
  },
  methods: {},
  updated() {
    this.active = location.href.slice(29);
  },
  watch: {
    active() {
      window.console.log(this.active);
    }
    // active() {
    //   let str = location.href.slice(29);
    //   window.console.log(str);
    //   if (this.str == "home") {
    //     this.active = str;
    //   } else if (str == "recover") {
    //     this.active = str;
    //   } else if (str == "eatbar") {
    //     this.active = str;
    //   } else if (str == "order") {
    //     this.active = str;
    //   } else if (str == "mine") {
    //     this.active = str;
    //   }
    // }
  }
};
</script>