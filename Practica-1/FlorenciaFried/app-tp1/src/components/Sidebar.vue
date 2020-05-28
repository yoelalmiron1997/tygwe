<template>
  <aside class="sidebar">
    <div class="presentation">
      <button class="button" v-on:click="type='video'">VER PRESENTACIÓN</button>
    </div>

    <form class="form">
      <div class="div">
        <label class="label" for="btc">Elija la moneda</label>

        <select class="select" id="btc" v-model="btc" name="btc">
          <option>ARS</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input class="input" type="submit" value="Buscar precio del Bitcoin" />
      </div>

      <div class="div">
        <label class="label" for="dai">Elija la moneda</label>

        <select class="select" id="dai" v-model="dai" name="dai">
          <option>ARS</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input class="input" type="submit" value="Buscar precio del Dai" />
      </div>
    </form>

    <Principal :type="type"></Principal>
  </aside>
</template>

<script>

import Principal from './Principal';

export default {
  name: 'Sidebar',

  data: function () {
    return {
      type: ' ',
    }
  },

  components: {
    Principal,
  },

  methods: {

  }
}
</script>

<style scoped>
.sidebar {
  width: 20%;
  background-color: #f7c2fe;
  height: 70vh;
  color: #fff;
  float: left;
  padding-top: 30px;
}

.presentation {
  display: flex;
  justify-content: center;
}

.button {
  background-color: rgb(38, 29, 46);
  color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 40px;
}

.button:hover {
  cursor: pointer;
}

.div {
  margin-top: 40px;
  margin-left: 5px;
}

.label {
  margin: 5px;
  color: black;
}

.select {
  display: block;
  margin: 5px;
  width: 40%;
}

.input {
  margin: 5px;
  width: 90%;
}
</style>