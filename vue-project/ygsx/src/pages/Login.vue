<template>
  <div style="font-size:16px">
    <div class="loginForm">
      <div class="inputList">
        <input placeholder="请输入用户名" type="text" v-model="login.username" class="user" />
      </div>
      <div class="inputList">
        <van-field
          placeholder="密码"
          readonly
          clickable
          :value="login.psw"
          @touchstart.native.stop="show = true"
        />
      </div>
      <p class="text">不管你注册没注册我反正就给你登录</p>
      <input class="btn" type="button" value="注册" @click="test() + $router.push({name:'mine'})" />

      <div class="logo">
        <img src="//img05.yiguoimg.com/d/web/190916/00191/161811/greylogo.png" alt />
      </div>
    </div>

    <van-number-keyboard v-model="login.psw" :show="show" :maxlength="11" @blur="show = false" />
  </div>
</template>

<script>
import Vue from "vue";
import { NumberKeyboard, Field } from "vant";
Vue.use(NumberKeyboard);
Vue.use(Field);
export default {
  data() {
    return {
      login: {
        username: "",
        psw: ""
      },
      show: true
      // value: ""
    };
  },
  created() {},
  methods: {
    test() {
      this.$store.dispatch("setLogin", {
        login: this.login
      });
      window.console.log(666);
    }
  }
};
</script>

<style scoped>
html {
  background: #39da85;
}
.loginForm .btn img {
  width: 127px;
  height: 74px;
}
.loginForm .logo {
  text-align: center;
  margin-top: 30px;
}
.loginForm .text {
  font-size: 8px;
  color: #ccc;
  margin-top: 20px;
}
.loginForm .btn {
  background: linear-gradient(90deg, #39da85, #01b27a);
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  margin-top: 30px;
}
.loginForm .inputList input[type="text"] {
  border: none;
  text-align: left;
  width: 100%;
}
.loginForm .inputList input[type="password"] {
  border: none;
  text-align: left;
  width: 100%;
}
.loginForm .inputList {
  padding: 10px;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginForm {
  padding: 11px 25px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.user {
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 15px;
  color: #323233;
}
</style>