<template>
  <div class="container">
    <img class="image" src="../assets/logo.png" />

    <header class="header">
      <h1 class="text"> TP N°1 --- Florencia Fried </h1>
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
  width: 82%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgb(252, 252, 252) 0%,
    rgb(110, 110, 110) 50%,
    rgb(0, 0, 0) 100%
  );
  color: white;
}

.image {
  width: 18%;
  height: 20vh;
  float: left;
  object-fit: cover;
}
</style>