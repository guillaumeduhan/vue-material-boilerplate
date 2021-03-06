import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-material/dist/vue-material.min.css'

import MyPlugin from './plugins/my-plugin'

Vue.use(VueMaterial)
Vue.use(MyPlugin)

Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
