<template>
  <div>
    <div class="list">
      <div class="item" v-for="i in 50" :key="i">111</div>
    </div>
  </div>
</template>
<script>
import { isReachPageBottom } from '../../components/modules/utils'
import $ from "webpack-zepto";
export default {
  name: "Show",
  data() {
    return {};
  },
  created() {
    var debounce = (func, delay) => {

        var debounceTimer = setTimeout(() => {
            
        }, delay)
    }
    $(window).on("scroll", function() {
        console.log(isReachPageBottom(100))
    });
  },
  methods: {}
};
</script>
<style lang="scss">
</style>