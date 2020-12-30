<template>
  <q-page class="overflow-hidden">
    <NavigationBar />
    <div class="q-pa-sm q-gutter-md row justify-center">
      <Product class="col-2" v-for="n in 10" :key="`xs-${n}`" />
    </div>
  </q-page>
</template>

<script>
import NavigationBar from "components/inventory/NavigationBar.vue";
import Product from "components/inventory/Product.vue";

export default {
  components: { NavigationBar, Product },
  data() {
    return {
      text: ""
    };
  },
  methods: {}
};
</script>

<style lang="sass"></style>
