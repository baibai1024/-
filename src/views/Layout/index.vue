<template>
  <div>
    <van-tabbar route active-color="rgb(33, 185, 122)">
      <van-tabbar-item replace to="/Layout/Home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/Layout/House" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/Layout/Message" icon="newspaper-o"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/Layout/Admin" icon="contact"
        >我的</van-tabbar-item
      >
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
