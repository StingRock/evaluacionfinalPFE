import { createRouter, createWebHistory } from 'vue-router';
import CalculoDeCalificaciones from '../views/calculoCalificaciones.vue';
import FormularioRegistro from '../views/formularioRegistro.vue';

const routes = [
  {
    path: '/',
    name: 'calculoCalificaciones',
    component: CalculoDeCalificaciones
  },
  {
    path: '/formularioRegistro',
    name: 'formularioRegistro',
    component: FormularioRegistro
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


