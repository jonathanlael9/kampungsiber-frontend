import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import DashboardPage from '../views/Dashboard.vue'
import BookingPage from '../views/Booking.vue';
import SelectMentorVue from '@/views/SelectMentor.vue';
import BookingInfoVue from '@/views/BookingInfo.vue';

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
