const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        meta: {
          title: "Home"
        }
      },
      {
        path: "inventory",
        component: () => import("pages/inventory/InventoryHome.vue"),
        meta: {
          title: "Inventory"
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
    meta: {
      title: "Home"
    }
  }
];

export default routes;
