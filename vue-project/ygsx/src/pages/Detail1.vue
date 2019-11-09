<template>
  <div class="product">
    <van-icon name="arrow-left" size="30" @click="$router.back(-1)+clearTest()" />
    <van-swipe :height="375">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="productInfor">
      <p class="title" v-text="test.goodName"></p>
      <p class="subhead">
        <!---->
        <span v-text="test.goodIntroduce+' '+test.goodSlogan"></span>
      </p>
      <div class="price">
        <p class="priceIn">
          <span class="priceRed">
            <i>¥</i>
            {{test.goodPrice}}
          </span>
          <!---->
        </p>
        <p class="area">
          产地：
          <span class="name">泰国</span>
        </p>
      </div>
      <!---->
      <!---->
      <div class="sevenDay line-top backGauge">
        <span class="dian"></span>不支持7天无理由退货
      </div>
    </div>
    <div class="norms">
      <div class="title line-bottom">
        规格
        <span class="choose active">一个{{test.goodSpec}}</span>
      </div>
      <div class="title line-bottom">
        数量
        <div class="num">
          <van-stepper max="3" v-model="value" />
        </div>
        <span class="hint" style="display: none;">限购20件</span>
      </div>
    </div>
    <div class="address clear">
      <p class="title">送至</p>
      <div class="addressDetail">
        <p class="add">
          <span></span>广东 广州市 天河区
        </p>
        <p class="infor">
          <span>有货</span>
          <!---->
          <!---->
          16:00 前完成订单，预计明日(11月5日)送达
        </p>
      </div>
    </div>
    <div class="footer line-top">
      <a class="btn1" @click="$router.push({
        name:'home'
      })+clearTest()">
        <i class="home"></i>首页
      </a>
      <a class="btn1" @click="$router.push({
        name:'order'
      })">
        <i class="cart"></i> 购物车
        <!---->
      </a>
      <!---->
      <a href="javascript:;" class="btn2 btnRed">加入购物车</a>
      <!---->
      <!---->
    </div>
  </div>
</template>
<script>
// var str = decodeURI(location.search).slice(1);
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
import { Icon } from "vant";
const img1 = require("../assets/pg1.gif");
import { Stepper } from "vant";
Vue.use(Stepper);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
export default {
  data() {
    return {
      test: [],
      value: 1,
      images: [
        img1,
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572862736982&di=f3a45e7376c1af03e032856b7ac60d9c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F15%2F20180915000855_yujmp.thumb.700_0.jpeg"
      ]
    };
  },
  // beforeCreate() {
  //   this.onLoad();
  // },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      var str = parseInt(location.href.slice(-2));
      if (!str) {
        str = parseInt(location.href.slice(-1));
      }
      window.console.log(str);
      this.$axios.get("http://localhost:3000/goodslist1").then(({ data }) => {
        window.console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (i == str) {
            this.test = data[i];
          }
        }
        window.console.log(this.test);
        this.images.unshift(this.test.goodImgurl);
      });
    },
    clearTest() {
      this.$destroy();
    }
  },
  RouterLeave() {
    this.$destroy();
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
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
.product .productInfor {
  padding: 0.45rem 0 0.4rem 0rem;
  background: #fff;
  margin-bottom: 0.3rem;
  padding-bottom: 0;
}
.product .productInfor .title {
  line-height: 0.8rem;
  padding-right: 0.53rem;
  font-size: 0.53rem;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-left: 0.53rem;
}
.product .productInfor .subhead {
  padding-right: 0.53rem;
  font-size: 0.38rem;
  color: #808080;
  padding-top: 0.25rem;
  line-height: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-left: 0.53rem;
  height: 0.53rem;
}
.product .productInfor .subhead span {
  font-size: 0.46rem;
  color: #666;
}
.product .productInfor .price {
  position: relative;
  padding: 0rem 0 0rem;
  overflow: hidden;
  padding: 0.4rem 0 0.39rem;
  padding-left: 0.53rem;
  padding-right: 0.53rem;
}
.product .productInfor .price .priceIn {
  float: left;
}
.product .productInfor .price .area {
  float: right;
  font-size: 0.4rem;
  color: #999999;
  margin-top: 0.22rem;
}
.product .productInfor .price .priceIn .priceRed {
  font-size: 0.66rem;
  color: #eb3939;
}
.product .productInfor .price .priceIn .priceRed i {
  padding-bottom: 0.12rem;
  padding-right: 0.1rem;
}
.product .productInfor .backGauge {
  position: relative;
  height: 1.67rem;
  line-height: 1.67rem;
  padding: 0 0.53rem;
}
.product .productInfor .sevenDay {
  color: #aaaaaa;
  font-size: 0.4rem;
  padding: 0 0.53rem;
}
.product .productInfor .sevenDay .dian {
  display: inline-block;
  width: 0.33rem;
  height: 0.3rem;
  border-radius: 50%;
  margin-right: 0.2rem;
  border: 1px solid;
}
.product .productInfor .sevenDay .dian::after {
  content: "\FF01";
  position: absolute;
  left: 0.62rem;
  top: 0.4rem;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.product .norms {
  background: #fff;
  margin-bottom: 0.3rem;
}
.product .norms .title {
  position: relative;
  color: #999999;
  font-size: 0.43rem;
  line-height: 1.2rem;
  padding: 0.35rem 0.53rem;
}
.product .norms .title {
  position: relative;
  color: #999999;
  font-size: 0.43rem;
  line-height: 1.2rem;
  padding: 0.35rem 0.53rem;
}
.product .norms .title .choose.active {
  color: #01b27a;
  font-size: 0.46rem;
  padding: 0.23rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid #01b27a;
  margin-left: 0.4rem;
  height: 0.47rem;
  line-height: 0.47rem;
  border-radius: 0.92rem;
  margin: 0 0.05rem;
}
.product .norms .title .num {
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
  width: 2.6rem;
  height: 0.92rem;
  margin-left: 0.35rem;
}
.product .norms .title .num .cut,
.product .norms .title .num .add {
  float: left;
  position: relative;
  width: 0.75rem;
  height: 0.92rem;
}
.product .norms .title .num .cut i {
  position: absolute;
  left: 0.21rem;
  top: 0.28rem;
  width: 0.33rem;
  height: 0.33rem;
  background: url(//img06.yiguoimg.com/d/web/180226/01311/172807/cut2.png)
    no-repeat;
  background-size: 100%;
}
.product .norms .title .num .input {
  float: left;
  position: relative;
  width: 1.04rem;
  height: 0.93rem;
  line-height: 0.93rem;
  color: #333;
  text-align: center;
}
.product .norms .title .num .input:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background: #ddd;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
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
.product .norms .title .num .add i {
  position: absolute;
  left: 0.21rem;
  top: 0.28rem;
  width: 0.33rem;
  height: 0.33rem;
  background: url(//img06.yiguoimg.com/d/web/180110/00911/141220/add2.png)
    no-repeat;
  background-size: 100%;
}
.line-all:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.line-all:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.product .norms .title .num .add:after {
  border-radius: 0 8px 8px 0;
}
.product .norms .title .num .cut:after {
  border-radius: 8px 0 0 8px;
}

.product .address {
  background: #fff;
  padding: 0.45rem 0.53rem;
  margin-bottom: 0.3rem;
}
.product .address .title {
  float: left;
  color: #999999;
  font-size: 0.43rem;
  padding-right: 0.4rem;
  line-height: 0.5rem;
}
.product .address .addressDetail {
  float: left;
}
.product .address .addressDetail .add {
  position: relative;
  padding-left: 0.4rem;
  font-size: 0.46rem;
  color: #333;
  line-height: 0.5rem;
  width: 9.5rem;
  padding-bottom: 0.4rem;
}
.product .address .addressDetail .add span {
  position: absolute;
  top: 0.03rem;
  left: 0;
  display: inline-block;
  width: 0.33rem;
  height: 0.39rem;
  background: url(//img05.yiguoimg.com/d/web/170830/00916/154520/dw.png)
    no-repeat;
  background-size: 100% 100%;
}
.product .address .addressDetail .infor {
  line-height: 0.7rem;
  color: #333;
  font-size: 0.4rem;
}
.product .address .addressDetail .infor span {
  color: #01b27a;
  padding-right: 0.2rem;
}

.product .footer {
  height: 1.6rem;
  padding-left: 0.32rem;
  padding-right: 0;
}
.footer {
  position: fixed;
  z-index: 201;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
}
.footer a {
  position: relative;
  display: block;
  float: left;
  width: 20%;
  height: 50px;
  color: #fff;
  font-size: 12px;
  color: #8d8a8a;
  text-align: center;
}
.product .footer .btn1 {
  position: relative;
  width: 15%;
  height: 1.6rem;
  text-align: center;
  font-size: 0.33rem;
  color: #8d8a8a;
  padding-top: 1rem;
}
.product .footer .btn1 .home {
  position: absolute;
  top: 0.28rem;
  left: 50%;
  margin-left: -0.345rem;
  display: inline-block;
  width: 0.69rem;
  height: 0.61rem;
  background: url(//img05.yiguoimg.com/d/web/170830/00913/153914/home.png)
    no-repeat;
  background-size: 100% 100%;
}
i {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}
.product .footer .btn2.btnRed {
  float: right;
  background: #fb3d3d;
  color: #fff;
}
.product .footer .btn2 {
  width: 68%;
  font-size: 0.6rem;
  color: #b09059;
  text-align: center;
  height: 1.6rem;
  line-height: 1.6rem;
  box-sizing: border-box;
}
.product .footer .btn1 .cart {
  position: absolute;
  top: 0.28rem;
  left: 50%;
  margin-left: -0.35rem;
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background: url(//img05.yiguoimg.com/d/web/170830/00911/152542/nav_list.png)
    no-repeat;
  background-size: 100% 100%;
}
.van-stepper {
  width: 100px;
}
</style>