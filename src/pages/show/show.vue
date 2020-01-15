<template>
  <div>
    <div class="list">
      <div class="item" v-for="i in 50" :key="i">111</div>
      <div class="aaa" @click="show('aaa')">11111</div>
    </div>
  </div>
</template>
<script>
import {
  isReachPageBottom,
  debounce,
  throttle,
  stable
} from "../../components/modules/utils";
export default {
  name: "Show",
  data() {
    return {};
  },
  created() {},
  mounted() {
  },
  methods: {
    //   show: function(a){
    //       console.log(a)
    //   }
    show: debounce((k)=>{
        console.log('tag', k)
    }, 1000)
  }
};
</script>
<style lang="scss">
</style>