<template>
  <div>
    <van-nav-bar
  title="账号登录"
  left-arrow
  @click-left="onClickLeft"
/><van-form @submit="onSubmit">
  <van-field
    v-model="user.username"
    name="username"
    placeholder="请输入账号"
    :rules="rules.username"
    maxlength="8"

  />
  <van-field
    v-model="user.password"
    type="password"
    placeholder="请输入密码"
    :rules="rules.password"
    maxlength="12"

  />
  <div style="margin: 16px;">
    <van-button color="#21b97a"  block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
<p @click="pnt">还没有账号，去注册~</p></div>
</template>

<script>
import { Login } from '@/api'
import { Toast } from 'vant'
export default {
  data() {
    return {
      user: {
        username: '111111',
        password: '11111aaaa'
      },
      rules: {
        username: [
          {
            required: true,
            message: '账号不为空'
          },
          {
            pattern: /^[\d|\w]{5}/,
            message: '输入正确的账号'
          }
        ],
        password: [
          {
            required: true,
            message: '验证码不为空'
          },
          {
            pattern: /^\d\w{8}/,
            message: '输入正确的验证码'
          }
        ]
      }
    }
  },
  methods: {
    async onSubmit() {
      // console.log('submit', values)
      try {
        await Login(this.user)
        Toast.success('成功')
      } catch (e) {
        Toast.fail(e?.response?.data?.message || '服务器端错误')
      }
    },
    onClickLeft() {
      // history.back();
      history.go(-1)

      // this.$toast.success('返回')
    },
    pnt() {
      this.$router.push({ path: '/registe' })
    }
  }
}
</script>

<style scoped lang="less">
p{
  text-align: center;
  font-size: 16px;
}
</style>
