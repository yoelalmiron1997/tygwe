<template>
  <footer class="footer">
    <h2 class="text">Tecnología y Gestión Web - 2020</h2>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 10vh;
  background: linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(110, 110, 110) 50%,
    rgb(252, 252, 252) 100%
  );
}

.text {
  float: right;
}
</style>