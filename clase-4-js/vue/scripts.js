var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Vue!',
    counter: 0,
    input: '',
    currencies: null
  },
  methods: {
  	increment() {
  		this.counter++;
  	}
  },
  filters: {
  	currencyfixed(value) {
  		return value.toFixed(2);
  	}
  },
  mounted() {
  	axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  		.then(response => (this.currencies = response.data.bpi));
  }
});