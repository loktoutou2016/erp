<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          {{ $t("main_title") }}
        </q-toolbar-title>
        <RootToolBar />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <DateTimeBar />
      <q-list>
        <div class="row q-ma-md justify-start">
          <div class="col-4">
            <LangSwitcher />
          </div>
        </div>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import LangSwitcher from "components/LangSwitcher.vue";
import RootToolBar from "components/RootToolBar.vue";
import DateTimeBar from "components/DateTimeBar.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink, LangSwitcher, RootToolBar, DateTimeBar },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: this.$t("main_menu_item.home"),
          icon: "home",
          link: "/"
        },
        {
          title: this.$t("main_menu_item.sales"),
          icon: "receipt_long",
          link: "sales"
        },
        {
          title: this.$t("main_menu_item.crm"),
          icon: "contact_page",
          link: "crm"
        },
        {
          title: this.$t("main_menu_item.inventory"),
          icon: "inventory_2",
          link: "inventory"
        },
        {
          title: this.$t("main_menu_item.purchase"),
          icon: "shop_two",
          link: "purchase"
        },
        {
          title: this.$t("main_menu_item.accounting"),
          icon: "local_atm",
          link: "accounting"
        }
      ]
    };
  }
};
</script>
