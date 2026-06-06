import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/dashboard',
            component: Layout,
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/dashboard/index.vue'),
                    meta: { title: 'Dashboard' }
                },
                { 
                    path: 'kd/library_function',
                    name: '库函数',
                    component: () => import('@/views/kd/library_function.vue'),
                    meta: { title: '金蝶插件', breadcrumb: ['金蝶插件', '库函数'] }
                },
                { 
                    path: 'kd/bill_plugin',
                    name: '表单插件',
                    component: () => import('@/views/kd/bill_plugin.vue'),
                    meta: { title: '金蝶插件', breadcrumb: ['金蝶插件', '表单插件'] }
                },
                { 
                    path: 'kd/list_plugin',
                    name: '列表插件',
                    component: () => import('@/views/kd/list_plugin.vue'),
                    meta: { title: '金蝶插件', breadcrumb: ['金蝶插件', '列表插件'] }
                }
            ]
        }
    ],
})

export default router
