<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      @cancel="onCancel"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  }
};
</script>