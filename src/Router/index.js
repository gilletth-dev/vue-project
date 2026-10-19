import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/info', component: InfoView}
    ]
})