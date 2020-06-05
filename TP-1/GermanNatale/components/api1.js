Vue.component('api1',{
    template: //html 
        `
        <div>    
            <h1>Aplicación practica del API1</h1>
            <h2>Descripción</h2>
            <p>CoinDesk proporciona una API simple para que sus datos del Índice de precios de Bitcoin (BPI) estén disponibles programáticamente para todos.</p>
            <h2>Bitcoin price</h2>
            <ul>
                <li v-for="currency in currencies">
                    <strong>{{ currency.description }}</strong>
                    <span v-html="currency.symbol"></span>{{ currency.rate_float | currencyFixed }}
                </li>
            </ul>
        </div>
        `,
    filters: {
        currencyFixed(value){
            if (value) {
                return value.toFixed(2);
            }
        }          
    },
    data() {
        return {
            currencies: null
        }
       
    },
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.currencies = response.data.bpi));
    }
    
})






