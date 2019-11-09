<template>
  <van-swipe :autoplay="3000" :height="218">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img @click="$router.push({
        name:'bannerlist'
      })" v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [
        "https://img12.yiguoimg.com/d/items/2019/191018/9288739363858258_1125x652.jpg?w=1125&h=652",
        "https://img13.yiguoimg.com/d/items/2019/191029/9288739447154525_1125x652.jpg?w=1125&h=652",
        "https://img13.yiguoimg.com/d/items/2019/190627/9288738360567515_1125x652.jpg?w=1125&h=652",
        "https://img12.yiguoimg.com/d/items/2019/190926/9288739257755450_1125x652.jpg?w=1125&h=652",
        "https://img09.yiguoimg.com/d/items/2019/191030/9288739460884318_1125x652.jpg?w=1125&h=652"
      ]
    };
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
