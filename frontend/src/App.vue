<template>
  <div id="app">
    <header class="app-header">
      <h1 class="app-title">Category Manager</h1>
      <nav class="app-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/categories" class="nav-link">Categories</router-link>
      </nav>
    </header>

    <main class="app-main">
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
  --header-height: 60px;
  --border-radius: 8px;
  --shadow-strong: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
}

#app {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-header {
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  color: var(--text-on-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  box-shadow: var(--shadow-strong);
}

.app-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 500;
}

.app-nav {
  display: flex;
}

.nav-link {
  background: transparent;
  border: 1px solid var(--text-on-primary);
  border-radius: var(--border-radius);
  color: var(--text-on-primary);
  padding: 0.5rem 1rem;
  text-decoration: none;
  margin-left: 1rem;
  font-weight: 500;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.nav-link:hover,
.nav-link:active {
  color: var(--primary-color);
  background-color: var(--text-on-primary);
}

.app-main {
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .app-title {
    margin-bottom: 1rem;
  }

  .app-nav {
    align-self: center;
    padding-bottom: 1rem;
  }
}
</style>
