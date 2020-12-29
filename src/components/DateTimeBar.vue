<template>
  <div
    class="q-pa-xs text-center bg-grey-5"
    style="font-size: 1.5em;height:50px;"
  >
    {{ show_time }}
  </div>
</template>

<script>
import { date } from "quasar";

export default {
  name: "DateTimeBar",
  data() {
    return {
      show_time: "",
      show_time_time: ""
    };
  },
  methods: {
    getTime() {
      let timeStamp = Date.now();
      this.show_time = date.formatDate(timeStamp, "YYYY/MM/DD HH:mm:ss");
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

<style></style>
