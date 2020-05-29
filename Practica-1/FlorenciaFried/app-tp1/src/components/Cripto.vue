<template>
  <div class="container">
    <form @submit="checkForm()">
      <label class="label" for="btc">Elija la moneda</label>

      <select class="select" id="btc" v-model="coin" name="btc">
        <option>ARS</option>
        <option>EUR</option>
        <option>USD</option>
      </select>

      <input class="input" type="submit" value="Buscar precio" />

      <p class="error" v-if="error">Debe elegir una moneda</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Cripto',

  data: function () {
    return {
      coin: '',
      error: false,
    }
  },

  methods: {
    checkForm: function () {
      if (!this.coin) {
        this.error = true;
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 30px;
}

.label {
  margin: 10px;
  color: white;
}

.select {
  display: block;
  margin: 10px;
  width: 40%;
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