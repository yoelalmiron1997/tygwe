function  getInfo()  {
    const  url  =  'https://api.covid19api.com/summary'

    fetch(url)
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
       
        document.getElementById('contenido').innerHTML = `
        <h1>Casos de Coronavirus en:</h1>
           <h1>Argentina</h1> 
            <p>Nuevos casos confirmados: ${data.Countries[6].NewConfirmed}<br>
            Total de casos confirmados: ${data.Countries[6].TotalConfirmed}<br>
            Total de muertes confirmadas: ${data.Countries[6].TotalDeaths}<br>
            Total de casos recuperados: ${data.Countries[6].TotalRecovered}<br>
            Muertes del dia confirmadas: ${data.Countries[6].NewDeaths}<br>
            Casos recuperados del dia: ${data.Countries[6].NewRecovered}</p>

            <h1>Brasil</h1> 
            <p>Nuevos casos confirmados: ${data.Countries[23].NewConfirmed}<br>
            Total de casos confirmados: ${data.Countries[23].TotalConfirmed}<br>
            Total de muertes confirmadas: ${data.Countries[23].TotalDeaths}<br>
            Total de casos recuperados: ${data.Countries[23].TotalRecovered}<br>
            Muertes del dia confirmadas: ${data.Countries[23].NewDeaths}<br>
            Casos recuperados del dia: ${data.Countries[23].NewRecovered}</p>

            <h1>Chile</h1> 
            <p>Nuevos casos confirmados: ${data.Countries[34].NewConfirmed}<br>
            Total de casos confirmados: ${data.Countries[34].TotalConfirmed}<br>
            Total de muertes confirmadas: ${data.Countries[34].TotalDeaths}<br>
            Total de casos recuperados: ${data.Countries[34].TotalRecovered}<br>
            Muertes del dia confirmadas: ${data.Countries[34].NewDeaths}<br>
            Casos recuperados del dia: ${data.Countries[34].NewRecovered}</p><hr>         
            
        `
    })
    .catch(error=>console.log(error))
   }     

   



