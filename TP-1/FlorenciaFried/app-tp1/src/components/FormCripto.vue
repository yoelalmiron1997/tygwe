<template>
  <form class="form" v-on:submit.prevent="checkForm()">
    <label class="label" for="btc">Elija la moneda</label>

    <select class="select" id="btc" v-model="coin" name="btc">
      <option>ARS</option>
      <option>EUR</option>
      <option>USD</option>
    </select>

    <input class="input" type="submit" value="Buscar precio del Bitcoin" />

    <p class="error" v-if="error">Debe elegir una moneda</p>
  </form>
</template>

<script>

import axios from 'axios';

export default {
  name: 'FormCripto',

  data: function () {
    return {
      type: '',
      coin: '',
      info: '',
      error: false,
    }
  },

  methods: {
    checkForm: function () {
      if (!this.coin) {
        this.error = true;
      } else {
        this.error = false,
          axios
            .get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=" + this.coin)
            .then((response) => {
              this.info = response.data.DISPLAY.BTC;
            }),

          this.type = 'cripto',

          this.$emit('criptoCompleted', this.type, this.coin, this.info);
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