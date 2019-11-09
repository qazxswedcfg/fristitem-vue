<template>
  <div>
    <div class="header">
      <div class="headerImg">
        <div class="tou">
          <img v-if="show()" src="../assets/dog.gif" alt />
          <img v-if="!show()" :src="pictures[num]" alt />
        </div>
        <span @click="$router.push({name:'login'})">
          <!-- <a href="" > -->
          <p class="name" v-if="show()">登录/注册</p>
          <!-- </a> -->
        </span>

        <span>
          <!-- <a href="" > -->
          <p class="name" v-if="!show()" v-text="login().username"></p>
          <span v-if="!show()" @click="$router.go(0)">退出</span>
          <!-- </a> -->
        </span>
      </div>
    </div>

    <van-grid>
      <van-grid-item
        icon="https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png"
        text="待支付"
      />
      <van-grid-item
        icon="https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png"
        text="待收货"
      />
      <van-grid-item
        icon="https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png"
        text="评价送悠币"
      />
      <van-grid-item
        icon="https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png"
        text="在线退换货"
      />
    </van-grid>

    <van-grid square>
      <van-grid-item :key="index" v-for="(n,index) in imgs" :icon="n" :text="txt[index]" />
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
const img1 = require("../assets/bg1.gif");
const img2 = require("../assets/pg1.gif");
const img3 = require("../assets/yaoshuai.png");
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      user: "",
      imgs: [
        "https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png",
        "https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png",
        "https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png",
        "https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png",
        "https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png",
        "https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png",
        "https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png",
        "https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png"
      ],
      txt: [
        "优惠券",
        "充值卡",
        "礼品兑换券",
        "收货地址",
        "帮助中心",
        "我的团购",
        "账户余额",
        "在线客服"
      ],
      pictures: [img1, img2, img3],
      num: parseInt(Math.random() * 3)
    };
  },
  created() {
    this.login();
    // this.picture();
  },
  methods: {
    login() {
      return this.$store.getters.getLogin.login;
    },

    show() {
      if (this.$store.getters.getLogin.login) {
        return false;
      } else {
        return true;
      }
    }

    // picture(){
    //   if (this.show()) {
    //     let i = parseInt(Math.random()*3);
    //     this.num = i;
    //     window.console.log(this.num)
    //     return this.num;
    //   }
    // }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 6.44rem;
  background: #2dd282
    url(//img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg) 100% 100%;
  background-size: 100% 100%;
  padding: 0 0rem 1.2rem 0rem;
  box-sizing: border-box;
  .header.headerImg {
    position: absolute;
    left: 0;
    top: 20%;
    height: 68px;
    width: 100%;
    .header.headerImg.tou {
      width: 68px;
      position: absolute;
      left: 10%;
      height: 50%;
      .header.headerImg.tou img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .header.headerImg span {
      color: #fff;
      .name {
        margin-left: 120px;
        font-size: 18px;
      }
      span {
        position: absolute;
        right: 8%;
        top: 80%;
      }
    }
  }
}
.van-grid {
  margin: 9px 0px;
}
</style>