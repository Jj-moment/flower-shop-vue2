import VueRouter from "vue-router";
import Vue from "vue";
import login from "@/views/admin/login";
import adminIndex from "@/views/admin"
import homeTable from "@/views/admin/table/home"
import userTable from "@/views/admin/table/user"
import userInfo from "@/views/admin/table/user/userInfo"
import adminTable from "@/views/admin/table/admin";
import orderTable from "@/views/admin/table/order";
import orderInfo from "@/views/admin/table/order/orderInfo";
import categoryTable from "@/views/admin/table/category";
import flowerTable from "@/views/admin/table/flower";
import flowerInfo from "@/views/admin/table/flower/flowerInfo";
import shoppingTable from "@/views/admin/table/shopping";
import menuTable from "@/views/admin/table/menu";

import profile from "@/views/admin/profile"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: login,
    },
    {
        path: '/adminIndex',
        name: 'admin-index',
        component: adminIndex,
        children: [
            {
                path: '/homeTable',
                name: 'home-table',
                component: homeTable
            },
            {
                path: '/userTable',
                name: 'user-table',
                component: userTable
            },
            {
                path: '/userInfo/:id',
                name: 'userInfo',
                component: userInfo,
                props: true
            },
            {
                path: '/orderTable',
                name: 'order-table',
                component: orderTable
            },
            {
                path: '/orderInfo/:id',
                name: 'orderInfo',
                component: orderInfo,
                props: true
            },
            {
                path: '/categoryTable',
                name: 'category-table',
                component: categoryTable
            },
            {
                path: '/flowerTable',
                name: 'flower-table',
                component: flowerTable
            },
            {
                path: '/flowerInfo/:id',
                name: 'flower-info',
                component: flowerInfo,
                props: true
            },
            {
                path: '/shoppingTable',
                name: 'shopping-table',
                component: shoppingTable
            },
            {
                path: '/adminTable',
                name: 'admin-table',
                component: adminTable
            },
            {
                path: '/adminProfile',
                name: 'admin-profile',
                component: profile
            },
            {
                path: '/menuTable',
                name: 'menu-table',
                component: menuTable
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router

