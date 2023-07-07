<script>
// 引入swiper的js
import { Swiper, SwiperSlide } from "swiper/vue";

// 引入swiper的css
import "swiper/css";

import "swiper/css/pagination";

// 引入需要的模块
import { Pagination,Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination,Autoplay],
    };
  },
  data() {
    return {
      imgList: [
      "https://img.alicdn.com/imgextra/i1/O1CN01YGUXOM1k5VKBPo5J3_!!6000000004632-2-tps-846-472.png",
        "https://gw.alicdn.com/imgextra/i4/O1CN01a71ilU1T2RCTvUXDY_!!6000000002324-0-tps-846-472.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN01XZC8Dd1IUs179sweg_!!6000000000897-2-tps-846-472.png",
        "https://img.alicdn.com/imgextra/i3/O1CN01Sf6dER1zbJ3uVQ0lE_!!6000000006732-0-tps-846-472.jpg",
      ],
    };
  },
};
</script>

<template>
  <div class="home-swiper-container">
    <Swiper
      
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 1000,
      
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in imgList" :key="item">
        <img class="swiper-img" :src="item">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.home-swiper-container {
  width: 100%;
  height: 30vh;
  position: relative;
  overflow: hidden;
}
.mySwiper {
  width: 100%;
  height: 30vh;
}
.swiper-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

