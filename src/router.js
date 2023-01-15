import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
const routes = [
    { path: "/", redirect: "/hello/world" },
    { path: "/hello/:msg", component: HelloWorld, props: true },
    {
        path: "/:catchAll(.*)",
        component: import("@/components/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
