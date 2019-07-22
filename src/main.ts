import Vue from 'vue';
import './boot';
import App from './App.vue';
import router from './router';
import store from './store';
import apolloProvider from './graphql/client';
import './theme.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
