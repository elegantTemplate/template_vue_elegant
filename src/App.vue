<template>
  <div id="app">
    <AlertComp></AlertComp>
    <LoadingComp></LoadingComp>
    <ToastComp></ToastComp>
    <router-view></router-view>
  </div>
</template>
<script>
import AlertComp from "./components/alert";
import LoadingComp from "./components/loading";
import ToastComp from "./components/toast";
export default {
  components: {
    AlertComp,
    LoadingComp,
    ToastComp
  }
};
</script>
<style lang="scss">
@import "./css/common.scss";
</style>