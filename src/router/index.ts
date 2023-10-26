import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/analysis',
    name: '数据分析',
    component: () => import('@/views/analysis/index.vue') // 懒加载组件
  },
  {
    path: '/project',
    name: '项目管理',
    component: () => import('@/views/project/index.vue')
  },
  {
    path: '/system',
    name: '系统管理',
    component: () => import('@/views/system/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
