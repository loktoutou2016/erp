<template>
  <div>
    <q-item clickable v-ripple>
      <div
        class="column text-center"
        style="font-size: 0.5em;padding-right: 10px;"
      >
        <div class="col">{{ show_time_date }}</div>
        <div class="col">{{ show_time_time }}</div>
      </div>

      <q-item-section side>
        <q-avatar class="" size="30px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="red">5</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section class="user-nike-name" style="font-size:0.8em;"
        >陳輔超</q-item-section
      >
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
      show_time_date: "",
      show_time_time: ""
    };
  },
  methods: {
    getTime() {
      let timeStamp = Date.now();
      this.show_time_date = date.formatDate(timeStamp, "YYYY-MM-DD");
      this.show_time_time = date.formatDate(timeStamp, "HH:mm:ss");
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

<style lang="sass">
.user-nike-name
  // padding-left: 5px
</style>
