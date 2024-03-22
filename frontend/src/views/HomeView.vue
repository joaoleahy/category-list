<template>
  <div class="home-container">
    <h1>Bem-vindo ao Gerenciador de Categorias</h1>
    <router-link to="/categories" class="category-button">Gerenciar Categorias</router-link>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 5rem;
}

h1 {
  margin-bottom: 2rem;
}

.category-button {
  display: inline-block;
  background-color: #129085;
  border: none;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.category-button:hover {
  background-color: #107372;
}
</style>
