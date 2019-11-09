<template>
  <div>
    <!-- <keep-alive> -->
    <van-loading v-if="show" size="40px" type="spinner" color="#1989fa" />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div
        @click="navToDetail(index)"
        class="prolist pt"
        v-for="(a,index) in goodslist"
        :key="index"
      >
        <div class="blockwrap prolist-blockwrap">
          <!---->
          <ul>
            <li>
              <div class="proitem">
                <div class="pic">
                  <a href="javascript:;">
                    <img :src="a.goodImgurl" />
                  </a>
                </div>
                <div class="info">
                  <div class="info-wrap">
                    <p class="name">
                      <a href="javascript:;" v-text="a.goodName"></a>
                    </p>
                    <p class="sub">
                      <span class="saletip" v-if="a.goodSlogan">{{a.goodSlogan}}</span>
                      {{a.goodIntroduce}}
                    </p>
                  </div>
                  <div class="price pricePadding">
                    <strong>￥{{a.goodPrice}}</strong>
                    {{a.goodSpec}}
                    <i class="price-addcart"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </van-list>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import Vue from "vue";
import store from "../store/index";
import { Card, Tag, Button, List } from "vant";
import { Loading } from "vant";
Vue.use(Loading);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      goodslist: [],
      show: true,
      state: store.state
    };
  },
  created() {
    // this.onLoad();
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/goodslist").then(({ data }) => {
        window.console.log(data);
        this.goodslist = this.goodslist.concat(data);
        this.loading = false;
        this.loadShow();
        if (this.goodslist.length >= 10) {
          this.finished = true;
        }
      });
      window.console.log("到底部了");
    },
    loadShow() {
      if (this.list) {
        this.show = false;
      }
    },
    navToDetail(index) {
      this.$router.push({
        name: "detail",
        params: { id: index }
        // query: { plan: "asd" }
      });
      window.console.log(index);
    }
  },
  computed: {}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.prolist {
  background: #fafafa;
}
.prolist .prolist-blockwrap {
  margin: 0 0.53rem;
  background: none;
}
.blockwrap {
  box-sizing: border-box;
  background: #fff;
}
ol,
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.prolist .proitem {
  position: relative;
  padding: 0.4rem 0.33rem;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  background: #fff;
  margin-bottom: 0.32rem;
}
.prolist .proitem .pic {
  float: left;
  width: 3.11rem;
  height: 3.11rem;
  margin-right: 0.48rem;
}
.proitem .pic {
  position: relative;
}
.prolist .proitem .info,
.prolist .proitem .pic a img {
  height: 3.11rem;
}
.proitem .info {
  position: relative;
}
.prolist .proitem .pic a {
  display: inline-block;
}
.prolist .proitem .info,
.prolist .proitem .pic a img {
  height: 3.11rem;
}
.proitem .pic img {
  width: 100%;
}
.prolist .proitem .info .name {
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.proitem .sub {
  color: #8d8a8a;
}
.proitem .sub {
  margin-top: 0.27rem;
}
.prolist .proitem .name a {
  font-size: 0.43rem;
  color: #000;
}
.proitem .sub {
  color: #8d8a8a;
  font-size: 11px;
}
.prolist .proitem .info .saletip {
  font-size: 0.4rem;
  color: #666;
}
.proitem .pricePadding {
  padding-right: 0.2rem;
  width: 6.99rem;
  height: 0.79rem;
  line-height: 0.79rem;
  position: absolute;
  bottom: 0;
  left: 3.6rem;
}
.proitem .price {
  font-size: 11px;
  color: #8d8a8a;
}
.prolist .proitem .price strong {
  font-size: 0.6rem;
  color: #fb3d3d;
}
.proitem .price strong {
  margin-right: 0.1rem;
  font-size: 0.36rem;
  font-weight: bold;
  color: #fb3d3d;
}
.proitem .info .pricePadding .price-addcart {
  width: 0.79rem;
  height: 0.79rem;
  background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png)
    no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 0;
  right: 0.5rem;
  border-radius: 50%;
  background-color: #01b27a;
}
.proitem .info {
  position: relative;
}
.prolist .proitem .info .saletip {
  font-size: 0.4rem;
  color: #666;
}
.saletip {
  height: 0.53rem !important;
  line-height: 0.53rem !important;
  padding: 0 0.3rem !important;
  font-size: 0.33rem !important;
  color: #01b27a !important;
  border: 1px solid #01b27a !important;
  display: inline-block !important;
  margin-right: 0.1rem !important;
  border-radius: 2em !important;
}
.van-loading__spinner {
  position: relative;
  /* top: 50%; */
  left: 45%;
  /* transform: translate(-50%, -50%); */
}
</style>