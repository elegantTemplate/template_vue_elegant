<template>
  <div id="app">
    <AlertComp></AlertComp>
    <LoadingComp></LoadingComp>
    <router-view></router-view>
  </div>
</template>
<script>
import AlertComp from "./components/alert";
import LoadingComp from "./components/loading";
export default {
  components: {
    AlertComp,
    LoadingComp
  }
};
</script>
<style lang="scss">
@import "./css/common.scss";
</style>