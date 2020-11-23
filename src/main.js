import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import axios from '@/comm/axios'
import 'view-design/dist/styles/iview.css';
Vue.prototype.$axios = axios;
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
