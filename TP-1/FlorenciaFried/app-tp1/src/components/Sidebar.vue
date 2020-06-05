<template>
  <div class="container">
    <aside class="sidebar">
      <div class="presentation">
        <button class="button" v-on:click="type = 'video'">
          VER PRESENTACIÓN
        </button>
      </div>

      <form-cripto @criptoCompleted="setValuesCripto"> </form-cripto>

      <form-image @imagesCompleted="setValuesImages"></form-image>
    </aside>

    <section class="data-container">
      <Presentation v-if="type === 'video'"></Presentation>

      <p v-if="errorCoin" class="error">
        Ha acurrido un error, no se puede mostrar el precio.
      </p>

      <div v-if="type === 'cripto' && errorCoin === false">
        {{ changeValueErrorImages() }}
        <Cripto :coin="coin" :info="info"></Cripto>
      </div>

      <p v-if="errorImages" class="error">
        Ha acurrido un error, no se pueden mostrar las imagenes.
      </p>

      <div v-if="type === 'images' && errorImages === false">
        {{ changeValueErrorCoin() }}
        <Images :info="info"></Images>
      </div>
    </section>
  </div>
</template>

<script>

import Presentation from './Presentation';
import Cripto from './Cripto';
import Images from './Images';
import FormCripto from './FormCripto';
import FormImage from './FormImage';

export default {
  name: 'Sidebar',

  components: {
    Presentation,
    Cripto,
    Images,
    FormCripto,
    FormImage,
  },

  data: function () {
    return {
      type: 'video',
      coin: '',
      info: null,
      number: 0,
      search: '',
      errorCoin: false,
      errorImages: false,
    }
  },

  methods: {
    setValuesCripto: function (type, coin, info, error) {
      this.type = type;
      this.coin = coin;
      this.info = info;
      this.errorCoin = error;
    },

    setValuesImages: function (info, type, error) {
      this.type = type;
      this.info = info;
      this.errorImages = error;
    },

    changeValueErrorCoin: function () {
      this.errorCoin = false;
    },

    changeValueErrorImages: function () {
      this.errorImages = false;
    }
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

.data-container {
  width: 80%;
  height: 70vh;
  float: left;
}

.error {
  text-align: center;
  font-size: large;
  color: red;
}
</style>