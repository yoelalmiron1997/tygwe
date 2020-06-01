<template>
  <form class="form" v-on:submit.prevent="checkForm()">
    <input class="label" v-model="search" placeholder="Buscar imagenes de..." />

    <input class="input" type="submit" value="Buscar" />

    <p class="error" v-if="error">El campo es obligatorio</p>
  </form>
</template>

<script>
export default {
  name: 'FormImage',

  data: function () {
    return {
      type: '',
      error: false,
      search: '',
    }
  },

  methods: {
    checkForm: function () {
      if (!this.search) {
        this.error = true;
      } else {
        this.error = false;
        this.type = 'images';
        this.$emit('imagesCompleted', this.type);
      }
    },
  }
}
</script>

<style scoped>
.form {
  margin-top: 30px;
  margin-left: 10px;
}

.label {
  margin: 10px;
  color: rgb(87, 99, 207);
}

.input {
  margin: 10px;
  width: 90%;
}
.error {
  color: red;
  margin-left: 15px;
}
</style>