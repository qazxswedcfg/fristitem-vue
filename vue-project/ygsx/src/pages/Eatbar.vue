<template>
  <div class="index">
    <div class="title title-icon" id="divOtherCategoryBanner">
      <!--===homve AD Nav Menu===-->
      <div class="title-in title-pad" style>
        <ul class="refer">
          <!--<li>腰线数据部份</li>-->
        </ul>
        <!-- icon 入口 Data -->
        <ul class="icon-list clear" style>
          <li>
            <a
              target="_blank"
              id="ad_56dcfeff-9299-432b-82e0-34fee7f318b6"
              href="http://article.m.yiguo.com/Article/Category/food?isopenhwa=1"
              title
              onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '0', '56dcfeff-9299-432b-82e0-34fee7f318b6', '做美食', '', 'http://article.m.yiguo.com/Article/Category/food?isopenhwa=1');"
            >
              <img
                class="lazy icon1"
                src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png"
                id="ArtPic_56dcfeff-9299-432b-82e0-34fee7f318b6"
                data-original="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png"
                alt="做美食"
                style="display: block;"
              />
              做美食
            </a>
          </li>
          <li>
            <a
              target="_blank"
              id="ad_b7c44cee-4044-4361-b5d3-3918f53f9b03"
              href="http://article.m.yiguo.com/Article/Category/know?isopenhwa=1"
              title
              onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '1', 'b7c44cee-4044-4361-b5d3-3918f53f9b03', '涨知识', '', 'http://article.m.yiguo.com/Article/Category/know?isopenhwa=1');"
            >
              <img
                class="lazy icon1"
                src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png"
                id="ArtPic_b7c44cee-4044-4361-b5d3-3918f53f9b03"
                data-original="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png"
                alt="涨知识"
                style="display: block;"
              />
              涨知识
            </a>
          </li>
          <li>
            <a
              target="_blank"
              id="ad_4d337427-914e-4ada-b997-87672319b3a0"
              href="http://article.m.yiguo.com/Article/Category/live?isopenhwa=1"
              title
              onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '2', '4d337427-914e-4ada-b997-87672319b3a0', '生活家', '', 'http://article.m.yiguo.com/Article/Category/live?isopenhwa=1');"
            >
              <img
                class="lazy icon1"
                src="http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png"
                id="ArtPic_4d337427-914e-4ada-b997-87672319b3a0"
                data-original="http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png"
                alt="生活家"
                style="display: block;"
              />
              生活家
            </a>
          </li>
          <li>
            <a
              target="_blank"
              id="ad_30328b5a-700f-427a-ae7d-e49dd6d4a801"
              href="http://article.m.yiguo.com/Article/Category/tryEat?isopenhwa=1"
              title
              onclick="gotoAdpaterAndTracked('首页-分类广告', 'Index.AdCategory', '3', '30328b5a-700f-427a-ae7d-e49dd6d4a801', '爱试吃', '', 'http://article.m.yiguo.com/Article/Category/tryEat?isopenhwa=1');"
            >
              <img
                class="lazy icon1"
                src="http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png"
                id="ArtPic_30328b5a-700f-427a-ae7d-e49dd6d4a801"
                data-original="http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png"
                alt="爱试吃"
                style="display: block;"
              />
              <i class="new"></i>
              爱试吃
            </a>
          </li>
        </ul>
      </div>
    </div>
    <van-loading v-if="show" size="80px" type="spinner" color="#1989fa" />
    <div
      v-for="(a,index) in list"
      :key="index"
      class="title open-article"
      style
      id="rptIndexArt_ba0e7958-37c8-4776-9400-5833d3e48ca5"
      pageindex="1"
      rownum="1"
    >
      <a
        target="_blank"
        class="border-color"
        href="/Article/Detail/?ArticleId=ba0e7958-37c8-4776-9400-5833d3e48ca5&amp;isopenhwa=1"
        categoryid="5b044b7b-696e-4baf-9127-fb77401624a8"
        title="想不到麻豆文旦竟然是这样的寓意"
        onclick="articleToAppOpenedNewWindow('首页-进入详情页', 'Index.ArticleDetails', '0', 'ba0e7958-37c8-4776-9400-5833d3e48ca5', '');"
      >
        <div class="title-in">
          <div class="img-box">
            <span class="txt live" v-text="a.OtherCategoryName"></span>
            <span class="num">
              <i class="icon icon5"></i>
              {{a.TotalReadNum}}
            </span>
            <img
              class="lazy"
              :src="a.PictureUrl"
              data-original="http://img13.yiguoimg.com/d/albums/2019/190829/153403927062390557_900x383.jpg"
              :alt="a.EfruitArticleTitle"
              style="display: block;"
            />
          </div>
          <p class="tit1" v-text="a.EfruitArticleTitle"></p>
          <p class="tit2"></p>
          <div class="time">
            <img
              class="lazy img-circle img-responsive"
              :src="a.AuthorPicture"
              data-original="http://img13.yiguoimg.com/d/albums/2019/190829/153403927062423325_640.jpg"
              :alt="a.Author"
              style="display: block;"
            />
            <span class="name">{{a.Author}}&nbsp;</span>
            <span class="time-new" v-text="a.PublishedTimed"></span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Loading } from "vant";
Vue.use(Loading);
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
      this.$axios.get("http://localhost:3000/eatbar").then(({ data }) => {
        window.console.log(data);
        this.list = data;
        this.loadShow();
      });
    },
    loadShow() {
      if (this.list) {
        this.show = false;
      }
    },
    navToDetail(index) {
      this.$router.push({
        name: "detail1",
        params: { id: index }
        // query: { plan: "asd" }
      });
      window.console.log(index);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clear:after {
  content: "\20";
  display: block;
  height: 0;
  clear: both;
}
.title {
  /* z-index: 9; */
  position: relative;
  box-sizing: border-box;
  margin-bottom: 5px;
  width: 100%;
}
.title-icon {
  margin-top: 0;
}
.title-icon .title-in {
  padding-top: 0;
}
.title .title-pad {
  padding: 0 3.6% 0 3.6%;
  box-sizing: border-box;
}
.title .title-in {
  position: relative;
  padding: 2.6% 2.6% 0 2.6%;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
}
.title .title-in:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  content: "";
  height: 1px;
  border-top: 1px solid #ccc;
  transform: scaleY(0.5);
  -webkit-transform: scaleY(0.5);
  z-index: 10;
}
.index .title .title-in .icon-list li {
  width: 20%;
  float: left;
  padding: 14px 0 14px;
}
.index .title .title-in .icon-list li a {
  display: inline-block;
  position: relative;
  padding-top: 44px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #808080;
  text-align: center;
}
.index .title .title-in .icon-list li a .icon1 {
  position: absolute;
  top: 6px;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 32px;
}
.title .border-color {
  color: #ccc;
  border: none;
  font-style: normal;
}
.title .title-in {
  position: relative;
  padding: 2.6% 2.6% 0 2.6%;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
}
.title .title-in:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  content: "";
  height: 1px;
  border-top: 1px solid #ccc;
  transform: scaleY(0.5);
  -webkit-transform: scaleY(0.5);
  z-index: 10;
}
.title .title-in .img-box {
  position: relative;
}
.title .title-in .tit1 {
  padding: 14px 0 0px;
  font-size: 18px;
  color: #000;
  line-height: 22px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title .title-in .tit2 {
  padding: 10px 0 0px;
  font-size: 13px;
  color: #6d6d6d;
  line-height: 17px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title .title-in .time {
  position: relative;
  padding: 0px 80px 0px 45px;
  box-sizing: border-box;
  margin-top: 10px;
}
.title .title-in:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  content: "";
  height: 1px;
  border-bottom: 1px solid #ccc;
  transform: scaleY(0.5);
  -webkit-transform: scaleY(0.5);
  z-index: 10;
}
.title .title-in .img-box .live {
  background: #ff6b22 !important;
}
.title .title-in .img-box .txt {
  position: absolute;
  top: 10px;
  left: 0;
  padding: 2px 9px 0px 4px;
  box-sizing: border-box;
  height: 23px;
  line-height: 20px;
  background: #cccccc;
  text-align: left;
  color: #fff;
  border-radius: 0 15px 15px 0;
  font-size: 13px;
  opacity: 0.9;
  filter: alpha(opacity=90);
  -moz-opacity: 0.9;
}
.title .title-in .img-box .num {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2px 8px 0px 20px;
  height: 17px;
  line-height: 16px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  text-align: center;
  color: #656565;
  font-size: 12px;
}
.title .title-in .img-box .num .icon5 {
  position: absolute;
  left: 6px;
  top: 4px;
  background-position: 0px 0;
  width: 12px;
  height: 9px;
}
.icon {
  background: url(http://img07.yiguoimg.com/e/web/161012/00584/105027/icon.png)
    no-repeat;
  background-size: 100px;
}
.title .title-in .img-box img {
  display: block;
  width: 100%;
}
.title .title-in .tit1 {
  padding: 14px 0 0px;
  font-size: 18px;
  color: #000;
  line-height: 22px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title .title-in .tit2 {
  padding: 10px 0 0px;
  font-size: 13px;
  color: #6d6d6d;
  line-height: 17px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title .title-in .time {
  position: relative;
  padding: 0px 80px 0px 45px;
  box-sizing: border-box;
  margin-top: 10px;
}
.title .title-in .time img {
  position: absolute;
  left: 0px;
  top: 50%;
  margin-top: -17px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
}
.title .title-in .time .name {
  display: inline-block;
  line-height: 57px;
  color: #8d8a8a;
  font-size: 13px;
}
.title .title-in .time .time-new {
  position: absolute;
  top: 50%;
  margin-top: -28px;
  right: 0;
  line-height: 57px;
  color: #8d8a8a;
  font-size: 13px;
}
.title .title-in .time:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  content: "";
  height: 1px;
  border-top: 1px solid #eee;
  transform: scaleY(0.5);
  -webkit-transform: scaleY(0.5);
  z-index: 10;
}
.title:last-child {
  margin-bottom: 50px !important;
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