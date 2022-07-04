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
        placeholder="输入城市"
        background="rgb(0,0,0,0)"
      />
      <van-icon name="map-marked" />
    </div>
    <van-swipe :autoplay="3000" :height="212">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
<van-grid  class="big" active-color="">
  <van-grid-item class="iconfont icon-ziyuan a" text="整租" />
  <van-grid-item class="iconfont icon-shuangren b" text="合租" />
  <van-grid-item class="iconfont icon-ditu c" text="地图找房" />
  <van-grid-item class="iconfont icon-home d" text="去出租" />
</van-grid>
<div class="zufang"><van-cell-group >
  <van-cell title="租房小组" value="更多" class="van-cell-a"/>
</van-cell-group>
<van-grid direction="horizontal" :column-num="2" >
  <van-grid-item icon="photo-o" text="家住回龙观归属的感觉" class='aa' />
  <van-grid-item icon="photo-o" text="宜居四五环大都市生活" class='aa' />
  <van-grid-item icon="photo-o" text="喧嚣三里屯繁华的背后" class='aa'  />
  <van-grid-item icon="photo-o" text="比邻十号线地铁心连心" class='aa'  />
</van-grid>
<!-- <ul>
  <li><img src="http://115.159.87.220:8080/img/groups/4.png" alt=""><p>家住回龙观</p><p>归属的感觉</p></li>
  <li><img src="" alt=""><p></p><p></p></li>
  <li><img src="" alt=""><p></p><p></p></li>
  <li><img src="" alt=""><p></p><p></p></li>
</ul> -->
</div>
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
    display: -webkit-flex;
    position: absolute;
    align-items: center;
    top: 20px;
    left: 10px;
    z-index: 9999;

    .btn{
      transform:translateX(.33rem);
      height: 33.98px;
      border: 1px solid rgba(0, 0, 0, 0);
      border-right: 1px solid rgb(126, 120, 120);

    }

  }
  .van-grid{
    width: 100%;
    height: 100px;
    .iconfont{
      display: flex;
       flex-direction:column;

    padding: 20px 0 30px 0;
    text-align: center;
    font-size: 30px;
    color:#00ae66;
  }
  }
  .van-cell-a {
    font-weight: bold;
    background-color: rgb(250, 248, 248);
  }
  .zufang{
    background-color: rgb(250, 248, 248);

  }
  .van-grid-item {
    height: 50px;
  }

.aa{
  padding: 0 10px 5px ;

}
}
</style>
