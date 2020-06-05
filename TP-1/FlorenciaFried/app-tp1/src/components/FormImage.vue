<template>
  <form id="FormImage" class="form" @submit.prevent="checkForm">
    <input class="label" v-model="search" placeholder="Buscar imagenes de..." />

    <input class="input" type="submit" value="Buscar" />

    <p class="error" v-if="error">El campo es obligatorio</p>
  </form>
</template>

<script>

import axios from 'axios';

export default {
  name: 'FormImage',

  data: function () {
    return {
      type: '',
      error: false,
      info: null,
      search: '',
      errorAPI: false,
    }
  },

  methods: {
    checkForm: function () {
      if (!this.search) {
        this.error = true;
      } else {
        this.error = false
        this.type = 'images'

        this.callToApi()
      }
    },

    callToApi: async function () {
      await axios
        .get("https://pixabay.com/ap/?key=16094236-f670de1bcfeac43a48ed4e5b5&q=" + this.search + "&per_page=6")
        .then((response) => {
          this.info = response.data.hits
        })
        .catch((error) => {
          console.log(error)
          this.errorAPI = true
        })

      this.$emit('imagesCompleted', this.info, this.type, this.errorAPI);
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