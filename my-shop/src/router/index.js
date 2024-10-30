import { createRouter, createWebHistory } from 'vue-router' 
const router = createRouter({ 
history: createWebHistory(), 
routes: [ 
{  
  path: '/',  
  redirect: '/home',  
  meta: { title: '首页' }  
}, 
{  
  path: '/home',  
  component: () => import('../pages/Home.vue'), 
  name: 'home', 
  meta: { title: '首页', isTab: true } 
}, 
{  
  path: '/category',  
  component: () => import('../pages/Category.vue'),  
  name: 'category', 
  meta: { title: '分类', isTab: true, isShowNav: true } 
}, 
{ 
  path: '/message', 
  component: () => import('../pages/Message.vue'), 
  name: 'message', 
  meta: { title: '消息', isTab: true, isShowNav: true } 
}, 
{ 
  path: '/cart', 
  component: () => import('../pages/Cart.vue'), 
  name: 'cart', 
  meta: { title: '购物车', isTab: true, isShowNav: true, isShowBack: 
true } 
}, 
{  
  path: '/user',  
  component: () => import('../pages/User.vue'),  
  name: 'user',  
  meta: { title: '我的', isTab: true } 
}, 
] 
}) 
router.beforeEach((to, from, next) => { 
  const title = to.meta && to.meta.title 
  if (title) { 
    document.title = title + ' - 微商城' 
  } 
  next()  
}) 
export default router 