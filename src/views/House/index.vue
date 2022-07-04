<template>
  <div>
 <div class="nav">
<van-icon name="arrow-left
" color="#fff" />
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
      <van-icon name="map-marked"  color="#fff" />
    </div>
    <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
    <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  }

}
</script>

<style scoped lang="less">
  .nav {
    display: -webkit-flex;
    align-items: center;
    top: 20px;
    left: 10px;
    z-index: 9999;
background-color: #21b97a;
    .btn{
      transform:translateX(.33rem);
      height: 33.98px;
      border: 1px solid rgba(0, 0, 0, 0);
      border-right: 1px solid rgb(126, 120, 120);

    }

  }</style>
