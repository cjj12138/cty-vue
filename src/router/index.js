import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout' //布局页


Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [
  {
      path: '/login',
      component: () => import('@/views/login/Login'),
      hidden: true //导航菜单忽略选项
  },
  {
      path: '/',
      component: Layout, //应用布局页
      redirect: '/index',
      hidden: true,
  },
  {
      path: '/index',
      component: Layout, //应用布局页
      name: 'index',
      meta:{
          title: "首页", //导航菜单项标题
          icon: 'el-icon-edit' //导航菜单图标
      },
      /*children: [
        {
          path: '/',
          component: () => import('@/views/index/index.vue'),
          name: 'indexs',
          meta: {
            title: "首页",
            icon: 'el-icon-edit',
            roles: ['admin','jerry']
          }
        }
      ]*/
  }
]

// 动态路由
export const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    meta:{
      title: "关于",
      icon: 'el-icon-edit'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/about/About.vue'),
        name: 'about',
        meta: {
          title: "About",
          icon: 'el-icon-edit',
          roles: ['admin','jerry']
        }
      },
      {
        path: 'good',
        component: () => import('@/views/goods/index.vue'),
        name: 'good',
        meta: {
          title: "good",
          icon: 'el-icon-edit',
          roles: ['admin','jerry']
        }
      },
    ]
  },
  {
    path: '/good',
    component: Layout,
    meta:{
      title: "商品管理",
      icon: 'el-icon-edit'
    },
    children: [
      {
        path: 'good',
        component: () => import('@/views/goods/index.vue'),
        name: 'good',
        meta: {
          title: "good",
          icon: 'el-icon-edit',
          roles: ['admin','jerry']
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_URL,
  routes: constRouter
})

export default router

