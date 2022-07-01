<template>
  <div id="test-project">
    <layout reference="layout-search-listing"></layout>
  </div>
</template>

<script>
import i18nHook from '@/lang';

export default {
  data() {
    return {
      error: '',
    };
  },
  watch: {
    language(newVal) {
      i18nHook(newVal);
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/styles.scss';
</style>
