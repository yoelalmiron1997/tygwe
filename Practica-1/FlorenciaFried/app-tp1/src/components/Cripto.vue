<template>
  <div class="container">

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Cripto',

  data: function () {
    return {

    }
  },

  methods: {
    checkForm: function () {
      if (!this.coin) {
        this.error = true;
      } else {
        axios
          .get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=" + this.coin)
          .then((response) => {
            this.info = response.data;
          })
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 30px;
}

</style>