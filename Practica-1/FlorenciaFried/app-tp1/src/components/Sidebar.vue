<template>
  <aside class="sidebar">
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',

}
</script>

<style scoped>
.sidebar {
  width: 20%;
  background-color: #f7c2fe;
  height: 70vh;
  color: #fff;
}

@media (max-width: 320px) {
  .sidebar {
    height: 83vh;
  }
}

@media (min-width: 321px)) {
  .sidebar {
    height: 75vh;
  }
}

@media (min-width: 376px) {
  .sidebar {
    height: 75vh;
  }
}
</style>