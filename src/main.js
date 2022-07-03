import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import vant from '@/plugins/vant'
import 'vant/lib/index.css'
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
