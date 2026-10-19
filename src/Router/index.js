import { createRouter, createWebHistory } from "vue-router";
import UserInfo from "../components/UserInfo.vue";
import InfoView from "../components/InfoView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: UserInfo},
        {path: '/info', component: InfoView}
    ]
})