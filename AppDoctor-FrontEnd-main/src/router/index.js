import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AppointmentView from '../views/appointment/AppointmentView.vue'
import NotFound from '../components/NotFound.vue'
import AllappointmentView from '../views/appointment/AllappointmentView.vue'
import Update from '@/components/Update.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/singup',
    name: 'singup',
    component:SignupView
  },
  {
    path: '/appointment',
    name: 'appointment',
    component:AppointmentView
  },
    {
    path: '/:cathAll(.*)',
    name: 'NotFound',
    component:NotFound
  },
  {
    path: '/allappointment:',
    name: 'Allappointment',
    component:AllappointmentView
  },
  {
    path: '/Appointment/update/:id',
    name: 'Update',
    component: Update
  },
  {
    path: '/Appointment/delete/:id',
    name: 'Delete',
    component: Update
  },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
