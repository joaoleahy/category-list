<template>
  <div id="app">
    <header>
      <h1>Gerenciador de Categorias</h1>
      <nav>
        <button @click="$router.push('/')">Home</button>
        <button @click="$router.push('/categories')">Categorias</button>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
:root {
  --primary-color: #129085;
  --text-on-primary: #ffffff;
}

#app {
  font-family: 'Roboto', sans-serif;
}

header {
  background-color: var(--primary-color);
  padding: 1rem;
  color: var(--text-on-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
}

nav button {
  background: none;
  border: none;
  color: var(--text-on-primary);
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

nav button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

main {
  padding: 2rem;
}
</style>
