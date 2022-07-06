<template>
  <div>
    <router-view ></router-view>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
  created() {
    console.log(axios.defaults)
  }
}
</script>

<style></style>
