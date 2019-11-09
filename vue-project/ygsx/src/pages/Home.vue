<template>
  <div>
    <Search />
    <Swipe />
    <Grid />
    <MainList />
    <Divider />
    <Card />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Swipe from "../components/Swipe.vue";
import Grid from "../components/Grid.vue";
import MainList from "../components/MainList.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    Search,
    Swipe,
    Grid,
    MainList,
    Divider,
    Card
  }
};
</script>