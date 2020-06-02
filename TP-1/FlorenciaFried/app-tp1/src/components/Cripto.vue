<template>
  <div class="container">
    <div class="cripto">
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
</template>

<script>

export default {
  name: 'Cripto',

  props: {
    coin: {
      type: String,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
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