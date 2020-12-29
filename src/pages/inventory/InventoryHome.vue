<template>
  <q-page class=" overflow-hidden">
    <div class="title_search_bar" style="text-align:center; ">
      <q-btn-group class="q-mt-md">
        <q-btn label="總覽"/>
        <q-btn label="操作"/>
        <q-btn-dropdown label="產品">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Articles</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn label="報告"/>
        <q-btn label="設置"
      /></q-btn-group>
      <div class="q-my-md row">
        <div
          v-if="!this.$q.platform.is.mobile"
          class="col text-h4 text-left q-ml-md q-mb-md title_btn"
        >
          {{ $route.meta.title }}
        </div>
        <div class="col">
          <q-input class="q-mb-md q-mx-md" dense square outlined v-model="text">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn-group class="q-mx-md">
            <q-btn-dropdown label="分組">分組</q-btn-dropdown>
            <q-btn-dropdown label="分類">分類</q-btn-dropdown>
          </q-btn-group>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    }
  }
};
</script>

<style lang="sass">
.title_search_bar
    border: 1px solid $grey-4
.title_btn
    &:hover
        cursor: pointer
</style>
