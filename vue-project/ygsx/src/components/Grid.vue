<template>
  <van-grid :column-num="4" :icon-size="62">
    <van-grid-item v-for="(g,index) in grids" :key="index" :icon="g.pictureUrl" :text="g.name" />
  </van-grid>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      grids: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      axios.get("http://localhost:3000/ygsx").then(({ data }) => {
        window.console.log(data);
        this.grids = data;
      });
    }
  }
};
</script>