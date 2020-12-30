<template>
  <div class="q-pa-xs row product_item items-center" style="min-width:180px;">
    <q-img
      class="col"
      :src="url"
      spinner-color="white"
      style="height: 64px; max-width: 64px"
      @click="image_show_dialog = true"
    >
      <template v-slot:error>
        <div class="absolute-full flex flex-center">
          No Image
        </div>
      </template>
    </q-img>
    <q-list class="col colmun q-ma-xs product_decs">
      <div class="col overflow-hidden" style="font-size:0.5rem;">名稱</div>
      <div class="col" style="font-size:0.5em;">內部名稱</div>
      <div class="col" style="font-size:0.5em;">價格: $100.00</div>
      <div class="col" style="font-size:0.5em;">庫存: 130</div>
    </q-list>

    <!-- 彈出商品相冊 -->
    <q-dialog v-model="image_show_dialog" persistent>
      <q-card>
        <q-img :src="url2" style="height:300px;width:500px" />
        <q-card-section class="flex flex-center">
          <q-btn-group flat spread>
            <q-btn flat icon="keyboard_arrow_left" @click="refresh" />
            <q-btn flat icon="keyboard_arrow_right" @click="refresh" />
            <q-btn flat icon="close" v-close-popup />
          </q-btn-group>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      url: "https://placeimg.com/500/300/nature",
      url2: "https://placeimg.com/500/300/nature",
      image_show_dialog: false
    };
  },
  methods: {
    image_show() {
      this.image_show_dialog = true;
    },
    refresh() {
      this.url2 = "https://placeimg.com/500/300/nature?t=" + Math.random();
    }
  }
};
</script>
<style lang="sass">
.product_item
    border:1px solid $grey-3
.product_decs
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
</style>
