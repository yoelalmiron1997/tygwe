<template>
  <footer class="footer">
    <p class="text">Tecnología y Gestión Web - 2020</p>
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
  background-color: rgb(231, 231, 231);
}
.text {
  float: right;
  margin-right: 20px;
  font-size: x-large;
  font-weight: bold;
}
</style>