<template>
  <div>
    <router-view />
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "../components/Tabbar";
export default {
  components: {
    Tabbar
  }
};
</script>