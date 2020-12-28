<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section v-if="!this.$q.platform.is.mobile">
        <div class="text-center">{{ show_time }}</div>
      </q-item-section>
      <q-item-section side>
        <q-avatar class="" size="30px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="red">5</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section class="q-mx-xs">
        <q-item-label>John</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { date } from "quasar";
export default {
  name: "RootToolBar",
  data() {
    return {
      timer: "",
      show_time: ""
    };
  },
  methods: {
    getTime() {
      let timeStamp = Date.now();
      this.show_time = date.formatDate(timeStamp, "YYYY/MM/DD HH:mm:ss");
    }
  },
  mounted() {
    this.timer = setInterval(this.getTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style></style>
