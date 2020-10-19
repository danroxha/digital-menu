import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
