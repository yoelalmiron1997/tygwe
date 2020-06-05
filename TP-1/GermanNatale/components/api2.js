Vue.component('api2',{    
    template: //html 
            `
            <div>    
                <h1>Aplicación API COVID-19</h1>
                <h2>Descripción</h2>
                <p>Acceda a los datos de COVID19 a través de una API fácil y gratuita. Cree paneles, aplicaciones móviles o integre otras aplicaciones. Los datos provienen de Johns Hopkins CSSE </p>
                <h2>COVID-19</h2>
                <div class="table-responsive">
                    <table class="table table-condensed">
                    <caption>Totales diarios COVID-19 en Argentina.</caption>
                    <thead>
                        <tr>
                            <th>Día</th>
                            <th>Confirmados</th>
                            <th>Recuperados</th>
                            <th>Muertos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='day in argentina'>
                            <td>{{ day.Date }}</td>
                            <td>{{ day.Confirmed }}</td>
                            <td>{{ day.Recovered }}</td>
                            <td>{{ day.Deaths }}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            `,
   /*  filters: {
        moment: function (value) {
            return moment(value).format('DD/MM/YYYY');
        }              
    },    */
    data() {
        return {
            argentina: null
        }
        
    },
    mounted() {
        axios
            //Default= https://api.covid19api.com/
            .get('https://api.covid19api.com/total/dayone/country/argentina')
            .then(response => (this.argentina = response.data));
            }
})



