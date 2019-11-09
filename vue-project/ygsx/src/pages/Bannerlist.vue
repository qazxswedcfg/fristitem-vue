<template>
  <div>
    <van-icon name="arrow-left" size="30" @click="$router.back(-1)" />
    <div
      id="6d968ff8-beaf-4493-90a8-676a66c0dca0"
      data-tid="d25d0de0-bfb8-4caa-83d5-f2f994a8e392"
      class="one-image"
    >
      <a href="javascript:;" class="link-img" style="height: 11.1504rem;">
        <img
          src="https://img09.yiguoimg.com/d/items/2019/191029/9288739437487965_1125x1010.jpg?w=1125&amp;h=1010"
          style="height: 11.1504rem;"
        />
      </a>
    </div>
    <div
      id="8f5d38f1-cb6a-47e5-b8c9-4424b28c6be9"
      data-tid="65125458-c2ad-4ada-b6fd-17674a213e6f"
      class="one-image"
    >
      <a href="javascript:;" class="link-img" style="height: 1.9872rem;">
        <img
          src="https://img13.yiguoimg.com/d/items/2019/191029/9288739437520733_1125x180.jpg?w=1125&amp;h=180"
          style="height: 1.9872rem;"
        />
      </a>
    </div>
    <van-loading v-if="show" size="60px" type="spinner" color="#1989fa" />
    <ul>
      <li
        v-for="(a,index) in list"
        :key="index"
        @click="navToDetail(index)"
        class="onegoods"
        style="background: rgb(239, 234, 226);"
      >
        <div class="onebox">
          <div class="img">
            <img :src="a.goodImgurl" class="imgTop" />
            <div class="tag line-all" style="background: rgb(241, 56, 70);" v-text="a.marketingTag"></div>
          </div>
          <div class="bbg">
            <h2 v-text="a.goodIntroduce"></h2>
            <h3 v-text="a.goodName"></h3>
            <div class="price" style="color: rgb(241, 56, 70);">
              ¥
              <span v-text="a.goodPrice"></span>
              <b>
                .00
                <strong v-text="a.goodSpec"></strong>
              </b>
              <i style="left:2rem">¥ {{a.goodDashPrice}}</i>
            </div>
            <div class="btn">
              <a href="javascript:;" style="background: rgb(241, 56, 70);">加入购物车</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      id="c732d844-923b-4fc1-b3fa-17050047dee8"
      data-tid="87729521-6ecb-4f93-85a6-a43e7a92143d"
      class="one-image"
    >
      <a href="javascript:;" class="link-img" style="height: 0.89424rem;">
        <img
          src="https://img13.yiguoimg.com/d/items/2019/191029/9288739438536541_1125x81.jpg?w=1125&amp;h=81"
          style="height: 0.89424rem;"
        />
      </a>
    </div>
    <div
      id="e1ba28ca-b418-43f4-916c-cfd796d64071"
      data-tid="5775e6f6-e4e0-46c4-8886-c84728ebeab8"
      class="one-image"
    >
      <a href="javascript:;" class="link-img" style="height: 1.96512rem;">
        <img
          src="https://img13.yiguoimg.com/d/items/2019/191029/9288739438569309_1125x178.jpg?w=1125&amp;h=178"
          style="height: 1.96512rem;"
        />
      </a>
    </div>
    <div
      id="e0050f3f-73d4-4e53-a0d8-f1ab7ed52111"
      data-tid="3f714cbb-d417-4115-9dbc-606247cc8ffa"
      class="one-image"
    >
      <a href="javascript:;" class="link-img" style="height: 2.93664rem;">
        <img
          src="https://img14.yiguoimg.com/d/items/2019/190822/9288738918410006_1125x266.jpg?w=1125&amp;h=266"
          style="height: 2.93664rem;"
        />
      </a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import { Loading } from "vant";
Vue.use(Loading);
Vue.use(Icon);
export default {
  data() {
    return {
      list: [],
      show: true
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/goodslist1").then(({ data }) => {
        window.console.log(data);
        this.list = data;
        this.loadShow();
      });
    },
    navToDetail(index) {
      this.$router.push({
        name: "detail1",
        params: { id: index }
        // query: { plan: "asd" }
      });
      window.console.log(index);
    },
    loadShow() {
      if (this.list) {
        this.show = false;
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.van-icon {
  display: inline-block;
  position: absolute;
  z-index: 10;
  top: 3%;
  left: 3%;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
img {
  vertical-align: middle;
  border: 0;
}
.one-image .link-img {
  display: inline-block;
  background: #d6d6d7
    url(//img02.yiguo.com/e/web/150930/00982/163525/placeholder_140x140.png)
    no-repeat 50%;
}
.onegoods {
  position: relative;
  padding: 0.3rem 0.42rem;
}
.onegoods .onebox {
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.onegoods .img {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 7rem;
}
.onegoods .img img.imgTop {
  top: -1.71rem;
}
.onegoods .img img {
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: auto;
}
.onegoods .img .tag,
.onegoods .img .tag:after {
  position: absolute;
  top: 0;
  border-radius: 0 0 50% 50%;
}
.onegoods .img .tag {
  left: 0.42rem;
  box-sizing: border-box;
  width: 1.94rem;
  height: 2rem;
  line-height: 0.52rem;
  padding: 0.4rem 0.2rem 0;
  text-align: center;
  word-break: normal;
  font-size: 0.48rem;
  color: #fff;
}
.onegoods .img .tag:after {
  left: 0.12rem;
  width: 3.4rem;
  height: 3.76rem;
  content: "";
  border-color: #fff;
  border-top: none;
}
.onegoods .bbg {
  background: #fff;
}
.onegoods .bbg h2,
.onegoods .bbg h3 {
  overflow: hidden;
  width: 10.74rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
}
.onegoods .bbg h2 {
  height: 0.6rem;
  line-height: 0.5rem;
  padding: 0.42rem 0.42rem 0;
  letter-spacing: 2px;
  font-size: 0.5rem;
}
.onegoods .bbg h3 {
  height: 0.38rem;
  line-height: 0.38rem;
  padding: 0.2rem 0.42rem 0.42rem;
  font-size: 0.38rem;
  font-weight: 400;
}
.onegoods .bbg .price {
  position: relative;
  overflow: hidden;
  width: 6.7rem;
  height: 0.94rem;
  padding: 0 0.42rem 0.42rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.4rem;
}
.onegoods .bbg .price span {
  margin: 0 0 0 0.1rem;
  font-size: 0.96rem;
}
b {
  font-weight: 500;
}
.onegoods .bbg .price b strong {
  font-size: 0.48rem;
  font-weight: 400;
}
.onegoods .bbg .price i {
  position: absolute;
  top: 0.06rem;
  left: 2rem;
  text-decoration: line-through;
  font-size: 0.3rem;
  font-style: normal;
  color: #8d8a8a;
}
.onegoods .bbg .btn {
  position: absolute;
  right: 0.84rem;
  bottom: 0.72rem;
  width: 3.5rem;
  height: 1rem;
}
.onegoods .bbg .btn a {
  display: block;
  width: 3.5rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.5rem;
  color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
.one-image .link-img {
  display: inline-block;
  background: #d6d6d7
    url(//img02.yiguo.com/e/web/150930/00982/163525/placeholder_140x140.png)
    no-repeat 50%;
}
.one-image .link-img {
  display: inline-block;
  background: #d6d6d7
    url(//img02.yiguo.com/e/web/150930/00982/163525/placeholder_140x140.png)
    no-repeat 50%;
}
.one-image .link-img {
  display: inline-block;
  background: #d6d6d7
    url(//img02.yiguo.com/e/web/150930/00982/163525/placeholder_140x140.png)
    no-repeat 50%;
}
.van-loading__spinner {
  position: relative;
  /* top: 50%; */
  left: 45%;
  /* transform: translate(-50%, -50%); */
}
</style>