<template>
  <div style="font-size:16px" class="my">
    <div class="myIn loginNot">
      <!-- <div class="header clear">
        <div class="headerImg">
          <span class="imgBorder">
            <img alt=" 用户头像" src="//img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg" />
          </span>
          <a href="javascript:;">
            <p class="name">登录/注册</p>
          </a>
        </div>
        <i class="setting"></i>
        <div class="account">
          <p class="list">
            <span class="num">-</span>
            <span class="txt">卡包余额</span>
          </p>
          <p class="list">
            <span class="num">-</span>
            <span class="txt">悠币</span>
          </p>
        </div>
      </div>-->
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
      <div class="listTab line-top">
        <ul class="line-bottom">
          <li class="fourLi">
            <a href="javascript:;">
              <i class="icon">
                <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png" alt />
              </i>待支付
            </a>
          </li>
          <li class="fourLi">
            <a href="javascript:;">
              <i class="icon">
                <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png" alt />
              </i>待收货
            </a>
          </li>
          <li class="fourLi">
            <a href="javascript:;">
              <i class="icon">
                <img src="https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png" alt />
              </i>评价送悠币
            </a>
          </li>
          <li class="fourLi">
            <a href="javascript:;">
              <i class="icon">
                <img src="https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png" alt />
              </i>在线退换货
            </a>
          </li>
          <li class="border-left fourLi">
            <span class="pointRight"></span>
            <a href="javascript:;">
              <i class="icon"></i>全部订单
              <i class="goPage"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="testList clear">
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png"
              alt
              class="icon"
            />优惠券
          </a>
        </div>
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png"
              alt
              class="icon"
            />充值卡
          </a>
        </div>
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png"
              alt
              class="icon"
            />礼品兑换券
          </a>
        </div>
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png"
              alt
              class="icon"
            />收货地址
          </a>
        </div>
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png"
              alt
              class="icon"
            />帮助中心
          </a>
        </div>
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png"
              alt
              class="icon"
            />我的团购
          </a>
        </div>
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png"
              alt
              class="icon"
            />账户余额
          </a>
        </div>
        <div class="list line-bottom">
          <a href="javascript:;">
            <img
              src="https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png"
              alt
              class="icon"
            />在线客服
          </a>
        </div>
      </div>
    </div>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.my .header {
  position: relative;
  width: 100%;
  height: 4.44rem;
  background: #2dd282
    url(//img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg) 100% 100%;
  background-size: 100% 100%;
  padding: 0 0rem 1.2rem 0rem;
  box-sizing: border-box;
}
.my .listTab {
  position: relative;
  width: 100%;
  background: #fff;
  height: 2.7rem;
  margin: 0.3rem 0;
}
.my .testList {
  position: relative;
  width: 100%;
  background: #fff;
  margin-bottom: 0.3rem;
}
.my .header .headerImg {
  position: relative;
  display: inline-block;
  height: 2.26rem;
  margin-top: 0.9rem;
  padding: 0 0.32rem 0 2.85rem;
  box-sizing: border-box;
}
.my .header .setting {
  position: absolute;
  top: 0.36rem;
  right: 0.5rem;
  display: inline-block;
  width: 0.55rem;
  height: 0.61rem;
  background: url(//img07.yiguoimg.com/d/web/180508/01319/184003/setting.png)
    no-repeat;
  background-size: 100% 100%;
}
.my .loginNot .header .headerImg .imgBorder {
  display: inline-block;
  position: absolute;
  left: 0.5rem;
  top: 0;
  border: 0.13rem solid rgba(255, 255, 255, 0.5);
  width: 2.26rem;
  height: 2.26rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}
a {
  text-decoration: none;
  outline: 0;
}
.my .loginNot .header .headerImg img {
  position: absolute;
  top: -15px;
  left: 0rem;
  width: 2.26rem;
  height: 2.26rem;
  border-radius: 50%;
}
.my .loginNot .header .name {
  display: inline-block;
  text-align: left;
  color: #fff;
  font-size: 0.52rem;
  width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.7rem;
  padding: 0.34rem 0 0 0.8rem;
}
.my .account .list {
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
}
.my .account .list:last-child {
  border: none;
}
.my .account .list span.num {
  font-size: 0.5rem;
  color: #0e9f4e;
}
.my .account .list span {
  display: block;
}
.my .account .list span.txt {
  font-size: 0.32rem;
  color: #333333;
}
.my .listTab ul {
  position: relative;
  width: 100%;
  height: 100%;
}
.my .listTab ul li.fourLi {
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
}
.my .listTab ul li a {
  display: inline-block;
  font-size: 0.36rem;
  color: #333;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 1.73rem;
  box-sizing: border-box;
}
.my .listTab ul li a .icon {
  width: 0.74rem;
  height: auto;
  margin-left: -0.37rem;
}
.my .listTab ul li a .icon {
  position: absolute;
  left: 50%;
  top: 0.8rem;
}
.my .listTab ul li a .icon img {
  width: 100%;
  height: 100%;
}
img {
  border: 0;
  vertical-align: middle;
}
.my .listTab ul li:last-child a .icon {
  width: 0.9rem;
  height: 0.9rem;
  background: url(//img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png)
    no-repeat;
  margin-left: -0.45rem;
  background-size: 100% 100%;
}
.my .testList .list {
  position: relative;
  float: left;
  width: 25%;
  height: 2.7rem;
}
.my .testList .list a {
  position: relative;
  font-size: 0.36rem;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 1.7rem;
  text-align: center;
  box-sizing: border-box;
  color: #333;
}
.my .testList .list a .icon {
  width: 1.08rem;
  height: 1.08rem;
  margin-left: -0.504rem;
  display: inline-block;
  position: absolute;
  top: 0.6rem;
  left: 50%;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}
.clear:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
.my .account {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.78rem;
  background: white;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  box-sizing: border-box;
}
.header .headerImg span .name {
  margin-left: 20px;
  font-size: 18px;
}
.header .headerImg span span {
  position: absolute;
  right: 8%;
  top: 80%;
}
.header .headerImg span {
  color: #fff;
}
.header .headerImg .tou img {
  width: 100%;
  border-radius: 50%;
}
.header .headerImg .tou {
  width: 68px;
  position: absolute;
  left: 10%;
  height: 50%;
}
.header .headerImg {
  position: absolute;
  left: 0;
  top: 20%;
  height: 68px;
  width: 100%;
}
.header {
  position: relative;
  width: 100%;
  height: 6.44rem;
  background: #2dd282
    url(//img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg) 100% 100%;
  background-size: 100% 100%;
  padding: 0 0rem 1.2rem 0rem;
  box-sizing: border-box;
}
</style>