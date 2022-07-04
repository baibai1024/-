<template>
  <div>
    <div>
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="背景图">
    </div>
    <div class="login">
<img src="http://liufusong.top:8080/img/profile/avatar.png" alt="">
<p>游客</p>
<button>去登录</button>
    </div>
    <div class="login-gonnen">
      <van-grid :column-num="3" >
   <van-grid-item icon="star-o" text="我的收藏" />
  <van-grid-item icon="wap-home-o" text="我的出租" />
  <van-grid-item icon="clock-o" text="看房记录" />
  <van-grid-item icon="home-o" text="成为房主" />
   <van-grid-item icon="user-o" text="个人资料" />
  <van-grid-item icon="service-o" text="联系我们" />
</van-grid>
    </div>
    <div class="haokeImg">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="">
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
body {
  position: relative;
  img{
  width: 100%;
}
.login{
  position: absolute;
  // position: relative;
  top: 140px;
  left:auto;
  width: 300px;
  height: 165px;
background-color: #fff;
  box-shadow:-5px 0px 5px #ccc,
             0px -5px 5px #ccc,
            5px 0px 5px #ccc,
            0px 5px 5px #ccc;
            img {
              position: absolute;
              top: -30px;
              left:115px;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              border: 5px solid #fff;
               box-shadow:-5px 0px 5px #ccc,
             0px -5px 5px #ccc,
            5px 0px 5px #ccc,
            0px 5px 5px #ccc;
            }
            text-align: center;
            p{
              margin-top: 60px;
              font-size: 14px;
            }
            button {
              font-size: 14px;
              background-color: #21b97a;
              color: #fff;
              border-radius: 5px;
              border: 5px solid #21b97a

            }

}
.login-gonnen{
  margin-top: 115px;
}
.haokeImg{
  margin: 0 auto;
  width: 340px;
  height: 80px;
}
}
</style>
