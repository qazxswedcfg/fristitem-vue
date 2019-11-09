<template>
  <div class="cart-wrap">
    <div class="nogoods line-top" v-if="!show">
      <div class="icon"></div>
      <p>购物车空空的，快去逛逛吧！</p>
      <div class="btn">
        <a @click="$router.push({
            name:'home'
        })">去逛逛</a>
      </div>
    </div>
    <div class="goods goodsTop" v-if="show" style>
      <div class="group line-bottom">
        <div class="saleGroup line-top" v-for="(a,index) in list1" :key="index">
          <!---->
          <div class="one line-bottom">
            <div class="check">
              <i class="active"></i>
            </div>
            <div class="img">
              <img :src="a.goodImgurl" />
            </div>
            <div class="text">
              <h2 class="elli2" v-text="a.goodName"></h2>
              <div class="tag">
                <!---->
              </div>
              <p>
                <strong class="red">
                  ￥
                  <b v-text="a.goodPrice"></b>
                </strong>
                <!---->
              </p>
            </div>
            <div @click="Del(a.gid)" class="del">
              <i></i>
            </div>
            <div class="limit red"></div>
            <div class="num">
              <span class="cut line-all active">
                <i></i>
              </span>
              <span class="input line-bottom">1</span>
              <span class="add line-all">
                <i></i>
              </span>
            </div>
            <!---->
            <!---->
            <!---->
          </div>
          <!---->
        </div>
      </div>
    </div>
    <van-loading v-if="show1" size="80px" type="spinner" color="#1989fa" />
    <div class="guess line-bottom">
      <div class="title line-top">
        <h2>猜你喜欢</h2>
      </div>
      <div class="list clear">
        <div class="one" v-for="(a,index) in list" :key="index">
          <div class="img">
            <img :src="a.goodImgurl" />
          </div>
          <div class="text">
            <h2 class="elli2" v-text="a.goodName"></h2>
            <p>
              <strong class="red">
                ￥
                <b v-text="a.goodPrice"></b>
              </strong>
            </p>
          </div>
          <div class="btn">
            <a href="javascript:;" @click="Addtest(a.gid)"></a>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="zongjia" :disabled="!issb" button-text="提交订单">
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Dialog } from "vant";
import { SubmitBar } from "vant";
Vue.use(SubmitBar, Dialog);
export default {
  data() {
    return {
      list: [],
      list1: [],
      gid: [],
      show: true,
      zongjia: 0,
      issb: Boolean(this.zongjia),
      show1: true
    };
  },
  created() {
    this.onLoad();
    setTimeout(this.asd, 100);
    // this.asd();
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/goodslist1").then(({ data }) => {
        window.console.log(data);
        this.list = data;
        // this.asd();
        this.loadShow();
      });
    },
    loadShow() {
      if (this.list) {
        this.show1 = false;
      }
    },
    asd() {
      this.$axios.get("http://localhost:3000/gid").then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          this.gid.push(data[i].gid);
        }
        window.console.log(this.gid);
        if (this.gid.length == 0) {
          this.show = false;
        } else {
          this.show = true;
        }
        for (let i = 0; i < this.list.length; i++) {
          for (let j = 0; j < this.gid.length; j++) {
            if (this.gid[j] == this.list[i].gid) {
              this.list1.push(this.list[i]);
            }
          }
        }
        window.console.log(this.list1);
        for (let i = 0; i < this.list1.length; i++) {
          this.zongjia += this.list1[i].goodPrice;
        }
        this.zongjia = this.zongjia * 100;
        this.issb = Boolean(this.zongjia);
        window.console.log(this.zongjia);
      });
    },
    Addtest(gid) {
      // let arr = [];
      let isok = true;
      for (let i = 0; i < this.gid.length; i++) {
        if (gid == this.gid[i]) {
          isok = false;
          Dialog({ message: "购物车已有该商品" });
          break;
        }
      }
      if (isok) {
        this.list1 = [];
        this.zongjia = 0;
        this.gid.unshift(gid);
        for (let i = 0; i < this.list.length; i++) {
          for (let j = 0; j < this.gid.length; j++) {
            if (this.gid[j] == this.list[i].gid) {
              this.list1.push(this.list[i]);
            }
          }
        }
        for (let i = 0; i < this.list1.length; i++) {
          this.zongjia += this.list1[i].goodPrice;
        }
        this.zongjia = this.zongjia * 100;
        this.issb = Boolean(this.zongjia);
        window.console.log(this.zongjia);
        this.$axios
          .get("http://localhost:3000/add", {
            params: {
              gid
            }
          })
          .then(responese => {
            if (responese.status == 200) {
              if (this.gid.length == 0) {
                this.show = false;
              } else {
                this.show = true;
              }
            }
          });
      }
      window.console.log(gid);
    },
    Del(gid) {
      window.console.log(gid);
      for (let i = 0; i < this.gid.length; i++) {
        if (gid == this.gid[i]) {
          this.gid.splice(i, 1);
        }
      }
      window.console.log(this.gid);
      this.list1 = [];
      this.zongjia = 0;
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.gid.length; j++) {
          if (this.gid[j] == this.list[i].gid) {
            this.list1.push(this.list[i]);
          }
        }
      }
      for (let i = 0; i < this.list1.length; i++) {
        this.zongjia += this.list1[i].goodPrice;
      }
      this.zongjia = this.zongjia * 100;
      this.issb = Boolean(this.zongjia);
      window.console.log(this.zongjia);
      this.$axios
        .get("http://localhost:3000/del", {
          params: {
            gid
          }
        })
        .then(responese => {
          if (responese.status == 200) {
            if (this.gid.length == 0) {
              this.show = false;
            } else {
              this.show = true;
            }
          }
        });
    }
  },
  wacth: {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: content-box;
}
.clear:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
.cart-wrap .nogoods {
  position: relative;
  padding: 1.8rem 0 1.75rem;
  background: #fff;
  text-align: center;
}
.cart-wrap .nogoods .icon {
  width: 100%;
  height: 3.6rem;
  background: url(//img07.yiguoimg.com/d/web/180313/013112/195558/img_nogoods@3x.png)
    no-repeat center;
  background-size: auto 100%;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}
.cart-wrap .nogoods p {
  padding: 1rem 0 0.5rem;
  font-size: 0.42rem;
  color: #808080;
}
.cart-wrap .nogoods .btn {
  height: 1.2rem;
}
.cart-wrap .nogoods .btn a {
  position: relative;
  display: inline-block;
  width: 4.5rem;
  height: 1.2rem;
  border: 1px solid #11b57c;
  border-radius: 6px;
  line-height: 1.2rem;
  font-size: 0.5rem;
  color: #11b57c;
}
.line-top:after {
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

.cart-wrap .guess {
  position: relative;
  margin: 0 0 0.3rem;
  background: #fff;
  margin-top: 50px;
}
.cart-wrap .guess .title {
  position: relative;
  height: 1.65rem;
  line-height: 1.65rem;
  font-size: 0.48rem;
  color: #000;
  text-align: center;
}
.cart-wrap .guess .list {
  position: relative;
  padding: 0.1rem 0.19rem 0.74rem;
  margin-bottom: 100px;
}
.cart-wrap .guess .title h2 {
  position: relative;
  display: inline-block;
  padding: 0 0.18rem;
  font-size: 0.48rem;
  font-weight: normal;
  color: #333;
}
.cart-wrap .guess .title h2:before,
.cart-wrap .guess .title h2:after {
  content: "";
  display: block;
  width: 0.7rem;
  height: 0.09rem;
  position: absolute;
  top: 50%;
  margin-top: -0.04rem;
  background: url(//img05.yiguoimg.com/d/web/180508/01318/181423/decoration-left@3x.png)
    top left no-repeat;
  background-size: auto 100%;
}
.cart-wrap .guess .title h2:before {
  left: -0.7rem;
}
.cart-wrap .guess .title h2:after {
  right: -0.7rem;
  transform: rotate(180deg);
}
.cart-wrap .guess .list .one {
  float: left;
  position: relative;
  width: 50%;
  padding: 0.16rem 0.53rem;
  box-sizing: border-box;
}
.cart-wrap .guess .list .one .img {
  width: 4.96rem;
  height: 4.96rem;
}
.cart-wrap .guess .list .one .btn {
  position: absolute;
  right: 0.53rem;
  bottom: 0.16rem;
}
.cart-wrap .guess .list .one .img img {
  display: block;
  width: 4.96rem;
  height: 4.96rem;
}
img {
  border: 0;
  vertical-align: middle;
}
.cart-wrap .guess .list .one .text h2 {
  height: 1.12rem;
  line-height: 0.56rem;
  font-size: 0.42rem;
  font-weight: normal;
}
.elli2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.cart-wrap .guess .list .one .text p {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 11px;
  color: #808080;
}
.red {
  color: #fb3d3d;
}
.cart-wrap .guess .list .one .text p b {
  font-size: 0.42rem;
  font-weight: 500;
}
.cart-wrap .guess .list .one .btn a {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background: url(//img05.yiguoimg.com/d/web/180508/01311/150610/add.png)
    no-repeat;
  background-size: 100%;
}
.van-submit-bar {
  bottom: 50px;
}
.cart-wrap .goods {
  padding: 0 0 0px;
  color: #333;
}
.cart-wrap .goods .group {
  position: relative;
}
.cart-wrap .goods .saleGroup {
  position: relative;
  margin-bottom: 0.3rem;
  background: #fff;
}
.cart-wrap .goods .group .one {
  position: relative;
  padding: 0.32rem 0 0.32rem 1.22rem;
}
.cart-wrap .goods .group .one .check {
  position: absolute;
  top: 0.32rem;
  left: 0;
  width: 1.22rem;
  height: 0.54rem;
  padding: 1.08rem 0;
  text-align: center;
}
.cart-wrap .goods .group .one .check i.active {
  background-image: url(//img06.yiguoimg.com/d/web/180508/01316/175209/check2.png);
}
.cart-wrap .goods .group .one .check i {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background: url(//img06.yiguoimg.com/d/web/180119/01641/141347/check1.png)
    no-repeat;
  background-size: 100%;
}
.cart-wrap .goods .group .one .img {
  position: absolute;
  left: 1.22rem;
  top: 0.32rem;
  width: 2.7rem;
  height: 2.7rem;
}
.cart-wrap .goods .group .one .img img {
  display: block;
  width: 2.7rem;
  height: 2.7rem;
}
.cart-wrap .goods .group .one .text {
  padding: 0 1.9rem 0 3rem;
}
.cart-wrap .goods .group .one .text h2 {
  height: 1.12rem;
  line-height: 0.56rem;
  font-size: 0.42rem;
  font-weight: normal;
}
.elli2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.cart-wrap .goods .group .one .del {
  position: absolute;
  right: 0.5rem;
  top: 0.42rem;
  width: 1.2rem;
  height: 1.2rem;
}
.cart-wrap .goods .group .one .del i {
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  background: url(//img07.yiguoimg.com/d/web/180119/01642/141511/del.png) center
    right no-repeat;
  background-size: 0.48rem 0.5rem;
}
.cart-wrap .goods .group .one .limit {
  position: absolute;
  right: 0.5rem;
  top: 1.8rem;
  line-height: 0.4rem;
  font-size: 11px;
}
.red {
  color: #fb3d3d;
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
.line-top:after {
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
.cart-wrap .goods .group .one .text .tag {
  height: 0.56rem;
  padding: 0.2rem 0 0.1rem;
}
.cart-wrap .goods .group .one .text p {
  height: 0.72rem;
  line-height: 0.72rem;
  font-size: 0.34rem;
  color: #ccc;
}
.cart-wrap .goods .group .one .num {
  position: absolute;
  right: 0.5rem;
  top: 2.3rem;
  width: 2.6rem;
  height: 0.72rem;
}
.cart-wrap .goods .group .one .num .cut,
.cart-wrap .goods .group .one .num .add {
  float: left;
  position: relative;
  width: 0.72rem;
  height: 0.72rem;
}
.cart-wrap .goods .group .one .num .cut.active i {
  background-image: url(//img07.yiguoimg.com/d/web/180226/01311/172807/cut1.png);
}
.cart-wrap .goods .group .one .num .cut i {
  position: absolute;
  left: 0.21rem;
  top: 0.21rem;
  width: 0.33rem;
  height: 0.33rem;
  background: url(//img06.yiguoimg.com/d/web/180226/01311/172807/cut2.png)
    no-repeat;
  background-size: 100%;
}
i {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}
.cart-wrap .goods .group .one .num .cut:after {
  border-radius: 8px 0 0 8px;
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
.cart-wrap .goods .group .one .num .input {
  float: left;
  position: relative;
  width: 1.16rem;
  height: 0.72rem;
  line-height: 0.72rem;
  color: #333;
  text-align: center;
  font-size: 12px;
}
.cart-wrap .goods .group .one .num .input:before {
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
.cart-wrap .goods .group .one .num .add i {
  position: absolute;
  left: 0.21rem;
  top: 0.21rem;
  width: 0.33rem;
  height: 0.33rem;
  background: url(//img07.yiguoimg.com/d/web/180119/01642/141511/add2.png)
    no-repeat;
  background-size: 100%;
}
.cart-wrap .goods .group .one .num .add:after {
  border-radius: 0 8px 8px 0;
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
.van-loading {
  height: 400px;
  position: relative;
}
.van-loading__spinner {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}
</style>