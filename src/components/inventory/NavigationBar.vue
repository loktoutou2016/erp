<template>
  <div style="text-align:center;">
    <div class="q-my-md row items-center">
      <div class="col-xs-12  col-sm-12 col-md-6 col-xl-6 q-pa-sm">
        <q-btn-group spread>
          <q-btn label="總覽"/>
          <q-btn label="產品"/>
          <q-btn-dropdown label="操作">
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
      </div>
      <div class="col col-xs-12 col-sm-12 col-md-6 col-xl-6 q-pa-sm">
        <q-input dense square outlined >
          <template v-slot:append>
            <q-icon name="search" />

            <q-btn-group flat>
              <q-btn-dropdown label="分類"
                ><q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Videos</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Articles</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list></q-btn-dropdown
              >
            </q-btn-group>
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    }
  }
};
</script>

<style></style>
