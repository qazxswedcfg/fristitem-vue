<template>
  <van-tabs @click="onClick" v-model="active" sticky>
    <van-tab title="销量">
      <div class="productList">
        <div
          @click="navToDetail(a.gid)"
          class="productContent line-bottom"
          v-for="(a,index) in list"
          :key="index"
        >
          <div class="img">
            <!---->
            <img :src="a.goodImgurl" />
          </div>
          <div class="inforPro">
            <p class="title" v-text="a.goodName"></p>
            <p class="txt" v-text="a.goodIntroduce"></p>
            <!---->
            <!---->
            <p class="price">
              <span class="priceRed">¥{{a.goodPrice}}</span>
              <!---->
              <span class="standard">个{{a.goodSpec}}</span>
              <span class="addCart"></span>
              <!---->
            </p>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="新品">
      <div class="productList">
        <div
          @click="navToDetail(a.gid)"
          class="productContent line-bottom"
          v-for="(a,index) in list"
          :key="index"
        >
          <div class="img">
            <!---->
            <img :src="a.goodImgurl" />
          </div>
          <div class="inforPro">
            <p class="title" v-text="a.goodName"></p>
            <p class="txt" v-text="a.goodIntroduce"></p>
            <!---->
            <!---->
            <p class="price">
              <span class="priceRed">¥{{a.goodPrice}}</span>
              <!---->
              <span class="standard">个{{a.goodSpec}}</span>
              <span class="addCart"></span>
              <!---->
            </p>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="价格">
      <div class="productList">
        <div
          @click="navToDetail(a.gid)"
          class="productContent line-bottom"
          v-for="(a,index) in list"
          :key="index"
        >
          <div class="img">
            <!---->
            <img :src="a.goodImgurl" />
          </div>
          <div class="inforPro">
            <p class="title" v-text="a.goodName"></p>
            <p class="txt" v-text="a.goodIntroduce"></p>
            <!---->
            <!---->
            <p class="price">
              <span class="priceRed">¥{{a.goodPrice}}</span>
              <!---->
              <span class="standard">个{{a.goodSpec}}</span>
              <span class="addCart"></span>
              <!---->
            </p>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Loading } from "vant";
Vue.use(Loading);
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0,
      list: [],
      show: true
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/goodslist").then(({ data }) => {
        window.console.log(data);
        this.list = data;
      });
    },
    navToDetail(index) {
      this.$router.push({
        name: "detail",
        params: { id: index }
        // query: { plan: "asd" }
      });
      window.console.log(index);
    },
    onClick(name, title) {
      window.console.log(name);
      window.console.log(title);
      if (name == 0) {
        this.list = [];
        this.$axios.get("http://localhost:3000/goodslist").then(({ data }) => {
          window.console.log(data);
          this.list = data;
        });
      } else if (name == 1) {
        this.list = [];
        this.$axios.get("http://localhost:3000/jiangxu").then(({ data }) => {
          window.console.log(data);
          this.list = data;
        });
      } else if (name == 2) {
        this.list = [];
        this.$axios.get("http://localhost:3000/paixu").then(({ data }) => {
          window.console.log(data);
          this.list = data;
        });
      }
    }
  }
};
</script>
<style scoped>
.productList .productContent {
  z-index: 10;
  position: relative;
  padding: 0.5rem 0.32rem;
  box-sizing: border-box;
  overflow: hidden;
  background: #fff;
}
.productList .productContent .img {
  position: relative;
  float: left;
  width: 3.05rem;
}
.productList .productContent .inforPro {
  float: right;
  width: 8rem;
}
.productList .productContent .img img {
  width: 3.05rem;
  height: 3.05rem;
}
.productList .productContent .inforPro {
  float: right;
  width: 8rem;
}
.productList .productContent .inforPro .title {
  font-size: 0.46rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 0.6rem;
}
.productList .productContent .inforPro .txt {
  font-size: 0.336rem;
  color: #808080;
  padding: 0.3rem 0 0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.productList .productContent .inforPro .price {
  position: relative;
  height: 0.8rem;
  padding-top: 0.3rem;
  z-index: 10;
}
.productList .productContent .inforPro .price .priceRed {
  font-size: 0.46rem;
  color: #fd3d3d;
  padding-right: 0.45rem;
  line-height: 0.8rem;
}
.productList .productContent .inforPro .price .standard {
  font-size: 0.34rem;
  color: #808080;
  line-height: 0.8rem;
  padding-right: 0.2rem;
}
.productList .productContent .inforPro .price .addCart {
  z-index: 100;
  position: absolute;
  right: 0.5rem;
  top: 0.3rem;
  width: 0.8rem;
  height: 0.8rem;
  background: url(//img05.yiguoimg.com/d/web/180508/01311/150610/add.png)
    no-repeat;
  background-size: 100% 100%;
}
.line-bottom:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #ddd;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
</style>