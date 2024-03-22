<template>
  <div class="home">
    <div class="content">
      <h1 class="title">Welcome to the Category Manager</h1>
      <router-link to="/categories" class="manage-btn">Manage Categories</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #2c3e50, #4ca1af);
  color: #fff;
  text-shadow: 0px 4px 6px rgba(0,0,0,0.3);
}

.content {
  text-align: center;
  transform: translateY(-20%);
}

.title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.manage-btn {
  display: inline-block;
  background-color: #f9d342;
  color: #2c3e50;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  border: none;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.15);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.manage-btn:hover,
.manage-btn:focus {
  background-color: #ffd700;
  color: #2c3e50;
  box-shadow: 0 5px 15px rgba(0,0,0,0.25);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .manage-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
