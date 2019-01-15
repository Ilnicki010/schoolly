import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalystic from 'vue-analytics';
Vue.config.productionTip = false;
(function (h, o, t, j, a, r) {
  h.hj = h.hj || function () {
    (h.hj.q = h.hj.q || []).push(arguments)
  };
  h._hjSettings = {
    hjid: 1154076,
    hjsv: 6
  };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script');
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
Vue.use(VueAnalystic, {
  id: 'UA-131730529-1',
  router
})
