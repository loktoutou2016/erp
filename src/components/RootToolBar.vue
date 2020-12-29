<template>
  <div>
    <q-item clickable v-ripple>
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
export default {
  name: "RootToolBar",
  data() {
    return {};
  }
};
</script>

<style lang="sass"></style>
