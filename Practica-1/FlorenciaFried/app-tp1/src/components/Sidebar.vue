<template>
  <div class="container">
    <aside class="sidebar">
      <div class="presentation">
        <button class="button" v-on:click="type = 'video'">
          VER PRESENTACIÓN
        </button>
      </div>

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
    </aside>

    <div class="data-container">
      <video
        autoplay
        controls
        class="video"
        v-if="type === 'video'"
        src="../assets/video.mp4"
      ></video>

      <div class="cripto" v-if="type === 'cripto'">
        <img class="image" src="../assets/cripto.jpg" />

        <div v-if="coin === 'ARS'">
          <p>El precio actual es: {{ info.ARS.PRICE }}</p>
          <p>Fuente: {{ info.ARS.LASTMARKET }}</p>
          <p>Ultima actualizacion: {{ info.ARS.LASTUPDATE }}</p>
        </div>

        <div v-if="coin === 'EUR'">
          <p>El precio actual es: {{ info.EUR.PRICE }}</p>
          <p>Fuente: {{ info.EUR.LASTMARKET }}</p>
          <p>Ultima actualizacion: {{ info.EUR.LASTUPDATE }}</p>
        </div>

        <div v-if="coin === 'USD'">
          <p>El precio actual es: {{ info.USD.PRICE }}</p>
          <p>Fuente: {{ info.USD.LASTMARKET }}</p>
          <p>Ultima actualizacion: {{ info.USD.LASTUPDATE }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Sidebar',

  data: function () {
    return {
      type: 'video',
      coin: '',
      error: false,
      info: null,
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
          this.type = 'cripto';
      }
    },
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 70vh;
}

.sidebar {
  width: 20%;
  height: 100%;
  color: #fff;
  float: left;
  padding-top: 30px;
}

.presentation {
  display: flex;
  justify-content: center;
}

.button {
  background-color: black;
  color: rgb(255, 255, 255);
  padding: 20px;
  margin: 10px;
  border-radius: 40px;
}

.button:hover {
  cursor: pointer;
}

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

.data-container {
  width: 80%;
  height: 70vh;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video {
  max-width: 100%;
  max-height: 80%;
  border: 3px solid black;
  border-radius: 5px;
}

.cripto {
  max-width: 100%;
  max-height: 80%;
  font-size: large;
  color: green;
}

.image {
  width: 400px;
  height: 200px;
}
</style>