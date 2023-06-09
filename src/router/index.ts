import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import WorkoutsPage from '../views/WorkoutsPage.vue';
import WorkoutPage from '../views/WorkoutPage.vue';
import LogInPage from '../views/LogInPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LogIn',
    component: LogInPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/workouts/:id',
    name: 'Workouts',
    component: WorkoutsPage
  },
  {
    path: '/workout/:id/:idx',
    name: 'Workout',
    component: WorkoutPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
