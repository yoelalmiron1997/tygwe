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
  bottom: 0 !important;
  position: absolute;
  background: white;
  border-top: 1px solid black;
}
.text {
  float: right;
  margin-right: 20px;
}
</style>