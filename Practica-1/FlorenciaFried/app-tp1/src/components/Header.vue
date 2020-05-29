<template>
  <div class="container">
    <img class="image" src="../assets/logo.png" />

    <header class="header">
      <h1 class="text">TP N°1 --- Florencia Fried</h1>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  width: 79%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}

.image {
  width: 20%;
  height: 20vh;
  float: left;
  object-fit: cover;
}
</style>