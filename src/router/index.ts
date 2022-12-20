import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DashboardPage from '../views/Dashboard.vue';
import BookingPage from '../views/Booking.vue';
import SelectMentorVue from '@/views/SelectMentor.vue';
import BookingInfoVue from '@/views/BookingInfo.vue';
import PaymentMethod from '@/views/PaymentMethod.vue'
import PaymentPage from '@/views/PaymentPage.vue';
import SuccessPageVue from '@/views/SuccessPage.vue';

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
  {
    path: '/booking-consultation',
    name: 'BookingMentor',
    component: BookingPage
  },
  {
    path: '/booking-consultation/:id',
    name: 'SelectMentor',
    component : SelectMentorVue
  },
  {
    path: '/booking-consultation/:id/info',
    name: 'BookingInfo',
    component: BookingInfoVue
  },
  {
    path: '/booking-consultation/payment',
    name: 'PaymentMethod',
    component : PaymentMethod
  },
  {
    path: '/booking-consultation/payment/detail',
    name: 'PaymentPage',
    component : PaymentPage
  },
  {
    path: '/booking-consultation/payment/success',
    name: 'SuccessPage',
    component : SuccessPageVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
