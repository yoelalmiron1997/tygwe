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
  width: 80%;
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
  width: 20%;
  height: 20vh;
  float: left;
  object-fit: cover;
}

@media (max-width: 320px) {
  .header {
    height: 10vh;
    font-size: 0.5em;
  }

  .image {
    height: 10vh;
  }
}

@media (min-width: 321px) {
  .header {
    height: 15vh;
    font-size: 0.6em;
  }

  .image {
    height: 15vh;
  }
}

@media (min-width: 376px) {
  .header {
    height: 15vh;
    font-size: 0.7em;
  }

  .image {
    height: 15vh;
  }
}

@media (min-width: 426px) {
  .header {
    font-size: 1em;
  }
}
</style>