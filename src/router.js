/* eslint-disable */

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Transaction from "./pages/Transaction.vue";
import TransactionDetail from "./pages/TransactionDetail.vue";
import NotFound from "./pages/NotFound.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/transactions",
    component: Transaction,
  },

  {
    path: "/transactions/:id",
    component: TransactionDetail,
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
