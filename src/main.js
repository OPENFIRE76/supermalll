import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

axios({
  url: 'http://192.168.35.85:8889/select'
}).then(res => {
  // eslint-disable-next-line no-console
  console.log(res);
})
