import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import DashboardPage from '../views/Dashboard.vue'
import BookingPage from '../views/Booking.vue';
import SelectMentorVue from '@/views/SelectMentor.vue';
import BookingInfoVue from '@/views/BookingInfo.vue';
import PaymentMethod from '@/views/PaymentMethod.vue'
import PaymentPage from '@/views/PaymentPage.vue';
import SuccessPageVue from '@/views/SuccessPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path : '/dashboard',
    name : 'Dashboard',
    component: DashboardPage
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
