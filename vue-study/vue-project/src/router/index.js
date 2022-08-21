import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBinding2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/componentStudy/ParentComponent.vue'
import ParentComponent2 from '../views/componentStudy/ParentComponent2.vue'
import ParentComponent3 from '../views/componentStudy/ParentComponent3.vue'
import ParentComponent4 from '../views/componentStudy/ParentComponent4.vue'
import ParentComponent5 from '../views/componentStudy/ParentComponent5.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: "/apiDataBinding",
    name: 'apiDataBinding',
    component: DataBinding2
  },
  {
    path: '/nestedComponentTest',
    name: 'nestedComponentTest',
    component: NestedComponent
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/ParentComponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/ParentComponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/ParentComponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path: '/ParentComponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
