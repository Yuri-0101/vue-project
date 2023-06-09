import { createRouter, createWebHistory } from 'vue-router'
import PagInicial from '../views/PagInicial.vue'
import ListaLeilao from'../views/ListaLeilao.vue'

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: PagInicial
  },
  {
    path: '/lista',
    name: 'lista',
    component: ListaLeilao
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router