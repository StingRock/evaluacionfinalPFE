<template>
  <div id="nav">    
      <router-link to="/">Calculo de Calificaciones</router-link> |
      <router-link to="/formularioRegistro">Formulario de Registro</router-link> |
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>
