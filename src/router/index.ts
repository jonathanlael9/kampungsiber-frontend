import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DashboardPage from '../views/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Landingpage'
  },
  {
    path: '/Landingpage',
    name: 'Home',
    component: HomePage
  },
  {
    path : '/dashboard',
    name : 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/TestimoniPage',
    component: () => import('@/views/TestimoniPage.vue')
  },
  {
    path: '/FaqPage',
    component: () => import('@/views/FaqPage.vue')
  },
  {
    path: '/ContactUs',
    component: () => import('@/views/ContactUs.vue')
  },
  {
    name:'SignIn',
    path: '/SignIn',
    component: () => import('@/views/SignIn.vue')
  },
  {
    name:'SignedIn',
    path: '/Homepage',
    component: () => import('@/views/HomePageSignedIn.vue')
  },
  {
    path: '/ProfilePage',
    component: () => import('@/views/ProfilePage.vue')
  },
  {
    path: '/Riwayat',
    component: () => import('@/views/RiwayatPage.vue')
  },
  {
    path: '/Signupopt',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/Signup',
    component: () => import('@/views/SignUp_Main.vue')
  },
  {
    path: '/Signuplearner',
    component: () => import('@/views/SignUp_Learner.vue')
  },
  {
    path: '/Signupmentor',
    component: () => import('@/views/SignUp_Mentor.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
