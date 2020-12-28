<!-- some .vue file -->

<template>
  <!-- ...... -->
  <q-select
    v-model="lang"
    :options="langOptions"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
  <!-- ...... -->
</template>

<script>
export default {
  name: "LangSwitcher",
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: "en-us", label: "English" },
        { value: "de", label: "German" }
      ]
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
