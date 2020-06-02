<template>
  <header>
    <div class="image-container">
      <img class="image" src="../assets/logo.jpg" />
    </div>

    <div class="text-container">
      <h1 class="text">TP N°1 --- Florencia Fried</h1>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
.text-container {
  width: 80%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: rgb(0, 0, 0);
  float: right;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 20%;
  float: left;
}

.image {
  height: 20vh;
}
</style>