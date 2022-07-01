export default {
  computed: {
    xsOnly() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
