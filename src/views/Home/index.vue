<template>
  <div>
    <div class="nav">
      <van-button
        type="default"
        to="index"
        icon="arrow-down"
        icon-position="right"
        class="btn"
        >北京 </van-button
      ><van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        background="rgb(0,0,0,0)"
      />
      <van-icon name="map-marked" />
    </div>
    <van-swipe :autoplay="3000" :height="212">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from '@/utils/request'
import { swiper } from '@/api'
export default {
  data() {
    return {
      value: '',
      images: []
    }
  },
  created() {
    this.swiper()
  },

  methods: {
    async swiper() {
      const res = await swiper()
      this.images = res.data.body.map(
        (item) => axios.defaults.baseURL + item.imgSrc
      )
    }
  }
}
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe-item {
  img {
    height: 212px;
  }
}
body {
  position: relative;
  .nav {
    display: flex;
    position: absolute;
    align-items: center;
    top: 25px;
    left: 0;
    z-index: 9999;
    justify-content: center;
  }
}
</style>
