<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li><router-link to="/about">about</router-link></li>
      <li><router-link to="/todo">todo</router-link></li>
      <li><router-link to="/demo">demo</router-link></li>
      <li><a href="/about">about</a></li>
      <li><a href="/vue">vue</a></li>
      <li><a href="/demo">demo</a></li>
      <li><a href="/todo">todo</a></li>
      <li><a href="/fetchDemo">fetchDemo</a></li>
      <li><a href="/crudDemo">crudDemo</a></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
