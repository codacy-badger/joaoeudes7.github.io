import Vue from 'vue';
import Vuetify from 'vuetify';

// Style Vuetify
import 'vuetify/dist/vuetify.min.css';

// Components
import App from './App';
import router from './router';


Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
