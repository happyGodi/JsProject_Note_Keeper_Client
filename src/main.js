import Vue from 'vue'
import App from './app/App.vue'
import router from './router/index.js'
import store from './store/index.js'
import '../node_modules/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/customFramework/appleFramework.css'//special framework by Godi Godi to make custom styling easier

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
