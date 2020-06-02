<template>
  <div class="container">
    <img class="image" v-for="image in info" :key="image.id" :src="image.previewURL"/>
  </div>
</template>

<script>
export default {
  name: 'Images',

  props: {
    info: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

.container{
  max-width: 900px;
  padding: 0 100px;
}

.image{
  width: 200px;
  height: 150px;
  margin: 45px;
  margin-top: 20px;
  border: 1px solid grey;
  border-radius: 20px;
}

</style>