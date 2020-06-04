function mostrarFraseAleatoria() {
    var frases = [
    "Siempre que llovió, paró",
    "Al mal tiempo, buena cara",
    "A caballo regalado no se le miran los dientes"];

    var F = frases.length;

    let alea = Math.floor(Math.random()*F);
    var estilo = ["3px 3px blue", "4px 4px orange", "5px 5px green"];

    document.getElementById("Frases").style.textShadow = estilo[alea];
    document.getElementById("Frases").innerHTML = frases[alea];
    console.log(frases[alea]);
}

function tamAsideEquip(){
    document.getElementById("menuLat").style.height = '1600px'
}
function tamAside(){
    document.getElementById("menuLat").style.height = 'calc(100vh - 110px)'
}

//si haces varios llamados seguidos sale error 429, la fecha es de zona horaria central me parece
function getInfoVirus() {
    document.innerHTML = ''
    const url = 'https://api.covid19api.com/summary'

    fetch(url)
    .then(response => response.json())
    .then(data => {
        tamAside()
        const año = (data.Date).substr(0,4);
        const mes = (data.Date).substr(5,2);
        const dia = (data.Date).substr(8,2);
        let element = document.getElementById('contenido');
        element.innerHTML = `
        <h1 class="titCovid1">COVID-19</h1>
        <p class="datCovid">Cifras actualizadas al: ${dia}/${mes}/${año}<br>
        Datos obtenidos de la Universidad Johns Hopkins</p>
            <h1 class="titCovid">Datos oficiales en el mundo</h1>
            <p class="datCovid">Nuevos casos confirmados: ${data.Global.NewConfirmed}<br>
            Nuevas muertes confirmadas: ${data.Global.NewDeaths}<br>
            Nuevos casos recuperados: ${data.Global.NewRecovered}<br>
            Total de casos confirmados: ${data.Global.TotalConfirmed}<br>
            Total de muertes confirmadas: ${data.Global.TotalDeaths}<br>
            Total de casos recuperados: ${data.Global.TotalRecovered}</p>

            <h1 class="titCovid">Datos oficiales en Argentina</h1> 
            <p class="datCovid1">Nuevos casos confirmados: ${data.Countries[6].NewConfirmed}<br>
            Nuevas muertes confirmadas: ${data.Countries[6].NewDeaths}<br>
            Nuevos casos recuperados: ${data.Countries[6].NewRecovered}<br>
            Total de casos confirmados: ${data.Countries[6].TotalConfirmed}<br>
            Total de muertes confirmadas: ${data.Countries[6].TotalDeaths}<br>
            Total de casos recuperados: ${data.Countries[6].TotalRecovered}</p>  
        `
        console.log(data);
    })
    .catch(error=>console.log(error))   
}

function buscarEquipos() {
    document.getElementById('contenido').innerHTML = `
    <div class="buscador">
        <h1 class="titEqui">Equipos NBA</h1>
        <select name="equipo" id="equipo" class="equipo">
            <option value="">Seleccione un equipo</option>
                <optgroup label="Equipos:">
                    <option value="0">Atlanta Hawks</option>
                    <option value="1">Boston Celtics</option>
                    <option value="2">Brooklyn Nets</option>
                    <option value="3">Charlotte Hornets</option>
                    <option value="4">Chicago Bulls</option>
                    <option value="5">Cleveland Cavaliers</option>
                    <option value="6">Dallas Mavericks</option>
                    <option value="7">Denver Nuggets</option>
                    <option value="8">Detroit Pistons</option>
                    <option value="9">Golden State Warriors</option>
                    <option value="10">Houston Rockets</option>
                    <option value="11">Indiana Pacers</option>
                    <option value="12">Los Angeles Clippers</option>
                    <option value="13">Los Angeles Lakers</option>
                    <option value="14">Memphis Grizzlies</option>
                    <option value="15">Miami Heat</option>
                    <option value="16">Milwaukee Bucks</option>
                    <option value="17">Minnesota Timberwolves</option>
                    <option value="18">New Orleans Pelicans</option>
                    <option value="19">New York Knicks</option>
                    <option value="20">Oklahoma City Thunder</option>
                    <option value="21">Orlando Magic</option>
                    <option value="22">Philadelphia 76ers</option>
                    <option value="23">Phoenix Suns</option>
                    <option value="24">Portland Trail Blazers</option>
                    <option value="25">Sacramento Kings</option>
                    <option value="26">San Antonio Spurs</option>
                    <option value="27">Toronto Raptors</option>
                    <option value="28">Utah Jazz</option>
                    <option value="29">Washington Wizards</option>
                </optgroup>
        </select>
        <button class="boton" id="boton">Buscar</button>
    </div>
    <div class="tabla" id="tabla">

    </div>
    `
    document.querySelector('#boton').addEventListener('click',function(){
        getEquipos();
    })
    function getEquipos(){
        const url = 'https://www.balldontlie.io/api/v1/teams'

        fetch(url)
        .then(response => response.json())
        .then(info => {
            
            if (document.getElementById('equipo').value!==''){     //Si selecciona un equipo            
                tamAside();
                var equi = document.getElementById('equipo').value;
                console.table(info.data[equi]);
                document.getElementById('tabla').innerHTML = `<div class="contEquip"><p class="descEquip">Nombre: ${info.data[equi].name}<br>
                Nombre completo: ${info.data[equi].full_name}<br>
                Abreviación: ${info.data[equi].abbreviation}<br>
                Ciudad en la que se encuentra: ${info.data[equi].city}<br>
                Conferencia a la que pertenece: ${info.data[equi].conference}<br>
                División en la que compite: ${info.data[equi].division}
                </p></div>
                `
            }
            else{   //Si no selecciona un equipo muestro todos
                document.getElementById('tabla').innerHTML = ''
                for (var index=0;index<info.data.length;index++){
                    var skr = info.data[index];
                    mostrarEquipos()
                }
                tamAsideEquip();
            }
            function mostrarEquipos() { 
                console.table(skr);
                document.getElementById('tabla').innerHTML += `<div class="contEquipTod"><p class="descEquip">Nombre: ${skr.name}<br>
                Nombre completo: ${skr.full_name}<br>
                Abreviación: ${skr.abbreviation}<br>
                Ciudad en la que se encuentra: ${skr.city}<br>
                Conferencia a la que pertenece: ${skr.conference}<br>
                División en la que compite: ${skr.division}
                </p></div>
                `
            }     
        })
        .catch(error=>console.log(error))
    }
}
