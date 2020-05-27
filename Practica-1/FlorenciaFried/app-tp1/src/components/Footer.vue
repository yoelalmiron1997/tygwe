<template>
  <footer class="footer">
    <h3 class="text">Tecnología y Gestión Web - 2020</h3>
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
@media (max-width: 320px) {
  .footer {
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7em;
  }
}

@media (min-width: 321px) {
  .footer {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
  }
}

@media (min-width: 376px) {
  .footer {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
  }
}

@media (min-width: 426px) {
  .footer {
    font-size: 1em;
  }
}
</style>