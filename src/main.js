import Vue from 'vue';
import ndcPlugin, { vuetify, i18n, setup } from '@rddev/web-components';
import '@rddev/web-components/lib/plugin.css';
import formatCurrency from '@/helpers/formatCurrency';
import App from './App';
import router from './router';
import store from './store';
import i18nHook from './lang';
import globalMixin from './mixins/global';

Vue.config.productionTip = false;

// i18n: merge
i18nHook(i18n);

// plugins
Vue.use(ndcPlugin);
// global mixin
Vue.mixin(globalMixin);
Vue.filter('currency', formatCurrency);

// launch the app
const appTagId = 'test-project';
new Vue({
  store,
  i18n,
  vuetify,
  router,
  render: (h) => h(App),
  created() {
    setup.created();
  },
  mounted() {
    setup.mounted({
      direction: this.getters('app/getDirection'),
      parentTarget: `#${appTagId}`,
    });
  },
}).$mount(appTagId);
