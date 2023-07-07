<template>
  <div>
    <home-header> </home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-good></home-good>
    <home-footer></home-footer>
    
  </div>
</template>
<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeFooter from "./components/HomeFooter.vue";
import HomeSwiper from './components/HomeSwiper.vue';
import HomeIcons from "./components/HomeIcons.vue";
import HomeGood from "./components/HomeGood.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeFooter,
    HomeSwiper,
    HomeIcons,
    HomeGood,
  },
};
</script>
