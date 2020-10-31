import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./view/Home"),
    },
    {
      path: "/list",
      name: "List",
      component: () => import("./view/List"),
    },
    {
      path: "/detail",
      name: "Detail",
      component: () => import("./view/Detail"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("./view/Cart"),
    },
    {
      path: "/user",
      name: "User",
      component: () => import("./view/User"),
      children: [
        {
          path: "userinfo",
          name: "UserInfo",
          component: () => import("./user/userinfo"),
        },
        {
          path: "myFen",
          name: "myFen",
          component: () => import("./user/myFen"),
        },
        {
          path: "myShopping",
          name: "myShopping",
          component: () => import("./user/myShopping"),
        },
      ],
    },
  ],
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
