<template>
  <div class="home">
    <div class="button button-elegant" @click="toShow()">click start</div>
  </div>
</template>
<script>
import { test } from "../../components/utils/api";

export default {
  name: "Home",
  data() {
    return {};
  },
  created() {
    console.log(LG_CONFIG_API_PREFIX);
    test().then(res => {
      console.log(res);
    });
  },
  methods: {
    toShow() {
      this.$router.push({ name: "Show" });
    }
  }
};
</script>
<style lang="scss">
.button {
    margin: 2rem auto 0;
}
</style>