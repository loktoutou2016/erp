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
        { value: "zh-hk", label: "中文" }
      ]
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
      window.location.reload();
    }
  }
};
</script>
