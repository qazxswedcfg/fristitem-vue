<template>
  <van-tree-select height="150vw" :items="items" :main-active-index.sync="activeIndex">
    <template slot="content">
      <!-- <van-image v-if="activeIndex === 0" /> -->
      <!-- <van-image v-if="activeIndex === 1" /> -->
      <div v-if="activeIndex === 0" class="commodityBox">
        <a
          href="javascript:;"
          class="commodityList"
          @click="$router.push({
        name:'list'
      })"
        >
          <img src="https://img09.yiguoimg.com/e/items/2017/170612/9288708943225548_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170612/9288708943127244_220.jpg" />
          奇异果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170612/9288708942996172_220.jpg" />
          车厘子
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709129282255_220.jpg" />
          李
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709129020111_220.jpg" />
          莓
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170612/9288708943192780_220.jpg" />
          牛油果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img10.yiguoimg.com/e/items/2017/170615/9288709129511631_220.jpg" />
          提子
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709129478863_220.jpg" />
          苹果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709129446095_220.jpg" />
          梨
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709129413327_220.jpg" />
          柑桔橙柚
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709128921807_220.jpg" />
          山竹
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709128856271_220.jpg" />
          火龙果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709128823503_220.jpg" />
          椰子
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709128790735_220.jpg" />
          芒果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709128692431_220.jpg" />
          凤梨
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709128659663_220.jpg" />
          榴莲
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709128626895_220.jpg" />
          热带水果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709128594127_220.jpg" />
          时令水果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170615/9288709128561359_220.jpg" />
          原箱水果
        </a>
      </div>
      <div v-if="activeIndex === 1" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170616/9288709172896464_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709128528591_220.jpg" />
          苹果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709128495823_220.jpg" />
          梨
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709128463055_220.jpg" />
          柑桔橙柚
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170615/9288709128430287_220.jpg" />
          猕猴桃
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709128397519_220.jpg" />
          瓜
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170615/9288709128364751_220.jpg" />
          葡萄
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709128299215_220.jpg" />
          桃
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709128266447_220.jpg" />
          李
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170619/9288709269430995_220.jpg" />
          枣
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709128200911_220.jpg" />
          莓
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709128069839_220.jpg" />
          芒果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709128004303_220.jpg" />
          凤梨
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170615/9288709127971535_220.jpg" />
          莲雾
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img10.yiguoimg.com/e/items/2017/170615/9288709127938767_220.jpg" />
          芭乐
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709127905999_220.jpg" />
          百香果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709127873231_220.jpg" />
          热带水果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709127840463_220.jpg" />
          时令水果
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709127807695_220.jpg" />
          原箱水果
        </a>
      </div>
      <div v-if="activeIndex === 2" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709152481999_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img10.yiguoimg.com/d/items/2018/180803/9570202619127043_220.jpg" />
          牛排
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170615/9288709152318159_220.jpg" />
          进口牛肉
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709152285391_220.jpg" />
          国产牛肉
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709152252623_220.jpg" />
          猪肉
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709152219855_220.jpg" />
          羊肉
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img10.yiguoimg.com/e/items/2017/170615/9288709152121551_220.jpg" />
          肉制品
        </a>
      </div>
      <div v-if="activeIndex === 3" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170616/9288709173519056_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709152449231_220.jpg" />
          鸡
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709152416463_220.jpg" />
          鸭
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709152383695_220.jpg" />
          鹅/鸽/特色禽类
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709152350927_220.jpg" />
          蛋
        </a>
      </div>
      <div v-if="activeIndex === 4" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170619/9288709276607187_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/d/items/2018/180815/9570204213290255_220.jpg" />
          鳕鱼
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/d/items/2018/180803/9570202576037123_220.jpg" />
          虾仁
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/d/items/2019/190813/9570213791409933_144.jpg" />
          大闸蟹券
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170616/9288709169193680_220.jpg" />
          鱼
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170616/9288709169128144_220.jpg" />
          三文鱼
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709169062608_220.jpg" />
          虾
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709169029840_220.jpg" />
          蟹
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709168702160_220.jpg" />
          贝
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170616/9288709168669392_220.jpg" />
          活鲜
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/d/items/2019/190423/9288737833494167_220.jpg" />
          海参
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170616/9288709168472784_220.jpg" />
          加工水产
        </a>
      </div>
      <div v-if="activeIndex === 5" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170619/9288709291909843_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img10.yiguoimg.com/e/items/2017/170616/9288709173158608_220.jpg" />
          独家秘制
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170616/9288709172994768_220.jpg" />
          中华美食
        </a>
      </div>
      <div v-if="activeIndex === 6" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170619/9288709271954131_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170616/9288709169816272_220.jpg" />
          奶酪
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170616/9288709169685200_220.jpg" />
          乳品
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170619/9288709300593363_220.jpg" />
          面包
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709169619664_220.jpg" />
          蛋糕
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709168636624_220.jpg" />
          甜点
        </a>
      </div>
      <div v-if="activeIndex === 7" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170616/9288709170143952_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170616/9288709170799312_220.jpg" />
          叶菜类
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170616/9288709170766544_220.jpg" />
          根茎类
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170616/9288709170733776_220.jpg" />
          茄果/瓜果类
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709170701008_220.jpg" />
          花菜/豆类
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709170668240_220.jpg" />
          菌菇
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170616/9288709170635472_220.jpg" />
          沙拉菜
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170616/9288709170504400_220.jpg" />
          豆制品
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170616/9288709170438864_220.jpg" />
          葱蒜类
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170616/9288709170406096_220.jpg" />
          蔬菜组合
        </a>
      </div>
      <div v-if="activeIndex === 8" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170619/9288709271986899_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170616/9288709170111184_220.jpg" />
          冷冻点心
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170616/9288709170045648_220.jpg" />
          中式主食
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170616/9288709170012880_220.jpg" />
          火锅料
        </a>
      </div>
      <div v-if="activeIndex === 9" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img10.yiguoimg.com/e/items/2017/170615/9288709120729807_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709120926415_220.jpg" />
          米
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709120893647_220.jpg" />
          杂粮
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/e/items/2017/170615/9288709120762575_220.jpg" />
          油
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709120664271_220.jpg" />
          干货
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img13.yiguoimg.com/e/items/2017/170615/9288709120631503_220.jpg" />
          果干/零食
        </a>
      </div>
      <div v-if="activeIndex === 10" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img10.yiguoimg.com/e/items/2017/170615/9288709121811151_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709121712847_220.jpg" />
          冲调饮品
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/d/items/2017/171122/9288715459765110_220.jpg" />
          啤酒
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img11.yiguoimg.com/d/items/2019/190617/9288738284840657_220.jpg" />
          休闲食品
        </a>
      </div>
      <div v-if="activeIndex === 11" class="commodityBox">
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709151761103_220.jpg" />
          全部
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img12.yiguoimg.com/e/items/2017/170615/9288709121516239_220.jpg" />
          礼品礼盒
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img14.yiguoimg.com/e/items/2017/170615/9288709151892175_220.jpg" />
          礼卡礼券
        </a>
        <a href="javascript:;" class="commodityList">
          <img src="https://img09.yiguoimg.com/e/items/2017/170615/9288709151826639_220.jpg" />
          原膳礼盒
        </a>
      </div>
    </template>
  </van-tree-select>
</template>
<script>
import Vue from "vue";
import { TreeSelect } from "vant";
Vue.use(TreeSelect);
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "进口水果" },
        { text: "国产水果" },
        { text: "精选肉类" },
        { text: "禽类蛋品" },
        { text: "海鲜水产" },
        { text: "即烹美食" },
        { text: "乳品糕点" },
        { text: "新鲜蔬菜" },
        { text: "方便速食" },
        { text: "粮油杂货" },
        { text: "食品饮料" },
        { text: "礼品礼券" }
      ]
    };
  }
};
</script>
<style scoped>
.van-tree-select__nav {
  flex: 0.6;
}
.commodityBox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: flex-start;
}
.commodityBox a {
  width: 25%;
  margin: 10px;
  font-size: 12px;
  color: #808080;
}
.commodityBox a img {
  width: 100%;
}
</style>