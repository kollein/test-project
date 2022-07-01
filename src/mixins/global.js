import { mapState } from 'vuex';
import vuetifyMixin from './vuetify';

export default {
  mixins: [vuetifyMixin],
  computed: {
    ...mapState('app', ['appTheme']),
    // use 'underscore' to avoid conflicting with ndc
    _app() {
      return this.$store.state.ndc.app;
    },
    _auth() {
      return this.$store.state.ndc.auth;
    },
    _snowplow() {
      return this.$store.state.ndc.snowplow;
    },
    currencySymbol() {
      return this._app?.context?.site?.currency?.symbol;
    },
    language() {
      return this._app?.context?.site?.language;
    },
  },
};
