<template>
  <van-sticky>
    <van-search
      label="广州 "
      backgroungd
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      @focus="$router.push({
        name:'recover'
      })"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </van-sticky>
</template>
<script>
import Vue from "vue";
// import store from "../store/index";
import { Search } from "vant";
import { Sticky } from "vant";
Vue.use(Sticky);
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {}
  }
  // watch: {
  //   value(newValue) {
  //     store.setSearchText(newValue);
  //   }
  // }
};
</script>

<style scoped>
.van-search {
  background: linear-gradient(90deg, #39da85, #01b27a) !important;
}
</style>