import { createRouter, createWebHistory } from 'vue-router'
/**
 * 모듈을 import할 때 확장자명을 생략해도 되지만, 
 * 그럴 경우 .js를 우선적으로 호출하므로,
 * vue개발 시 .vue를 붙이는 습관 들이기!
 */

import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBinding2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/componentStudy/ParentComponent.vue'
import ParentComponent2 from '../views/componentStudy/ParentComponent2.vue'
import ParentComponent3 from '../views/componentStudy/ParentComponent3.vue'
import ParentComponent4 from '../views/componentStudy/ParentComponent4.vue'
import ParentComponent5 from '../views/componentStudy/ParentComponent5.vue'
import ProvideInject from '../views/provide.injectStudy/ProvideInject.vue'
import CompositionAPI2 from '../views/compositionStudy/CompositionAPI2.vue'
import CompositionAPI3 from '../views/compositionStudy/CompositionAPI3.vue'
import CompositionAPI4 from '../views/compositionStudy/CompositionAPI4.vue'
import Mixins from '../views/mixinsStudy/MixinsTest.vue'
import CustomDirective from '../views/CustomDirective/CustomDirective.vue'
// 카카오 로그인
import KakaoLogin from '../views/Login/LoginKakao.vue'

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
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/CompositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/CompositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/CompositionAPI4',
    name: 'CompositionAPI4',
    component: CompositionAPI4
  },
  {
    path: '/Mixins',
    name: 'Mixins',
    component: Mixins
  },{
    path: '/CustomDirective',
    name: 'CustomDirective',
    component: CustomDirective
  },
  {
    path: '/KakaoLogin',
    name: 'KakaoLogin',
    component: KakaoLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
