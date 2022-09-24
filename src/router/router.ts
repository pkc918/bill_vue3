import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const CommonRoutes: Array<RouteRecordRaw> = [
   {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: {
         name: "登录",
      },
   },
];

const DynamicRoutes: Array<RouteRecordRaw> = [
   {
      path: "/",
      name: "container",
      component: () => import("@/components/Layout.vue"),
      meta: {
         name: "首页"
      }
   }
]

const routes: Array<RouteRecordRaw> = [...CommonRoutes, ...DynamicRoutes]

const router = createRouter({
   history: createWebHistory(),
   routes
})

// token : Header.Payload.Signature
function getToken(t: string): string {
   const token = localStorage.getItem("bill_token");
   const list: string[] | undefined = token?.split(".");
   if (list && list.length == 3) return token as string;
   return "";
}

// 路由守卫, to _from next
router.beforeEach((to: any, _from: any, next: any) => {
   if (!getToken("bill_token") && to.path !== "/login") {
      return next({
         path: "/login"
      })
   } else {
      next();
   }
})

export default router