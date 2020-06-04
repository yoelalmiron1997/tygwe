var bearer = '';
var textoApi = document.getElementById("apis");

var btnTw = document.getElementById("btnTwitter");
var btnY = document.getElementById("btnYoutube");
var btnP = document.getElementById("btnPersonajes");
var btnW = document.getElementById("btnWea");


// funcion autoejectuable al cargar la pagina

(function(){
	var texto = document.getElementById("random")
	array =  new Array("Bienvenidos a mi pagina", "Hola, te doy la bienvenida", "Buenas, esta es mi pagina");

	var num = Math.round(Math.random()*(array.length - 1));

	var frase = document.createTextNode(array[num]);

	texto.appendChild(frase);


	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token",
		method: "POST",
		headers: {
			'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'Authorization': 'Basic ' + btoa('hK0j1SzRWsvwxWmBF3q2VBFrB:0Rj5fPGQD84sZof4aFqeU2Fmr4NJsfg2EXIxYyFR1DOxE6J86E')
		},
		data: {
			grant_type: 'client_credentials'
		},
		success: function(response){
			bearer=response.access_token;
			console.log(response);

		},
		error: function(req, status, err){
			console.log(req, status, err);
		}
	});


	var f = new Date();
	var fe = document.getElementById("fecha");
	var frase = document.createTextNode('Tecnologia Y Gestion Web ' + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
	fe.appendChild(frase)
}());


// Twitter

btnTw.onclick = function LastTweets(){
	var claseApi = textoApi.className;
	if(claseApi == 'disNone' || claseApi == 'api4' || claseApi == 'api2' || claseApi == 'api3'){
		textoApi.innerHTML = '<fieldset id="buscador"><input type="text" id="usertwitter" placeholder="Ingrese usuario.. (ej. lucasantarelli9)"><button id="buscartweet" onclick="listartweet()" ><i class="fas fa-search"></i></button></fieldset>';
		textoApi.setAttribute("class","api1");
	} else {
		textoApi.setAttribute("class","disNone");
	}
}
function listartweet(){
	var usuario = (document.getElementById("usertwitter").value).toLowerCase();
	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+usuario,
		method: "GET",
		headers: {
			'Content-type': 'application/json',
			'Authorization': 'Bearer ' + bearer
		},
		success: function(response){
 			console.log(response);
 			var id = response[0].id_str;
 				if (response[0].extended_entities == undefined){
 					textoApi.innerHTML = ' <fieldset id="buscador"><input type="text" id="usertwitter" placeholder="Ingrese usuario.."><button id="buscartweet" onclick="listartweet()" ><i class="fas fa-search"></i></button></fieldset> <br> Usuario: ' + response[0].user.screen_name +'<br> Nombre: ' + response[0].user.name + "<br> Seguidores: " + response[0].user.followers_count + ' <br> Descripcion: ' + response[0].user.description + '<br> Ultimo Tweet: ' + response[0].text + ' <br><br><a id="tweetCompleto" href="https://twitter.com/'+usuario+'/status/'+id+'" target="_blank">Tweet completo Aqui</a> ';
 				} else{
 					textoApi.innerHTML = ' <fieldset id="buscador"><input type="text" id="usertwitter" placeholder="Ingrese usuario.."><button id="buscartweet" onclick="listartweet()" ><i class="fas fa-search"></i></button></fieldset> <br> Usuario: ' + response[0].user.screen_name +'<br> Nombre: ' + response[0].user.name + "<br> Seguidores: " + response[0].user.followers_count + ' <br> Descripcion: ' + response[0].user.description + '<br> Ultimo Tweet ' + response[0].text + " <br>" +  '<video width="300px" src="' + response[0].extended_entities.media[0].video_info.variants[1].url + '" controls></video> <br><br> <a id="tweetCompleto" href="https://twitter.com/'+usuario+'/status/'+id+'" target="_blank">Tweet completo Aqui</a> ';
 				}
			textoApi.setAttribute("class","api1");
		},
		error: function(req, status, err){
			console.log(req, status, err);
			textoApi.innerHTML = ' <fieldset id="buscador"><input type="text" id="usertwitter" placeholder="Ingrese usuario.."><button id="buscartweet" onclick="listartweet()" ><i class="fas fa-search"></i></button></fieldset> <br> <p class="textoDeApis">Usuario no encontrado</p>';
		}
	});
}



// Youtube

btnY.onclick = function yt(){
	var claseApi = textoApi.className;
	if(claseApi == 'disNone' || claseApi == 'api1' || claseApi == 'api4' || claseApi == 'api3'){
		$.ajax({
			url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBym_Ai6ovUHU5VSrIdw49cZ0w5n8PeSrs&type=video&part=snippet&maxResults=3&channelId=UCXUUNQVt6nsETo0Q5PfkclA&order=date",
			method: "GET",
			dataType: "json",
			success: function(response){
				console.log(response);
				var num = Math.round(Math.random()*(response.items.length - 1));
				console.log(num);
				textoApi.innerHTML = 'Video aleatorio de los ultimos 3 subidos (Fire DJ): <br><br> <iframe width="702" height="395" src="https://www.youtube.com/embed/'+response.items[num].id.videoId +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				textoApi.setAttribute("class","api2");
			},
			error: function(req, status, err){
				console.log(req, status, err);
				textoApi.innerHTML = 'ERROR';
			}
		});
	} else {
		textoApi.setAttribute("class","disNone");
	}
}



//Personajes

btnP.onclick = function perso(){
	var claseApi = textoApi.className;
	if(claseApi == 'disNone' || claseApi == 'api1' || claseApi == 'api2' || claseApi == 'api4'){
		textoApi.innerHTML = '<ul> <li class="boton2 boton2_1"><a href="#" id="btnBrBad" onclick="brbadrandom()" target=""> <div class="centro"> <img src="bbad.png" width="30px"> <span class="redsoc"> Breaking Bad</span> </div> </a></li> <li class="boton2"> <a href="#" id="btnHarPo" onclick="harporandom()" target=""> <div class="centro"> <img src="hp.png" width="30px"> <span class="redsoc">  Harry Potter</span> </div> </a></li> </ul>';
		textoApi.setAttribute("class","api3");
	} else {
		textoApi.setAttribute("class","disNone");
	}
}

function brbadrandom(){
	$.ajax({
    url:"https://www.breakingbadapi.com/api/characters",
    type:'GET',
    dataType: "json",
    success: function(response){
      console.log(response);
      var numeroRandom = Math.round(Math.random()*(response.length - 1));
      if (response[numeroRandom].status == 'Alive'){
      	var estado = "Vivo/a";
      } else if (response[numeroRandom].status == 'Deceased' || response[numeroRandom].status == 'Presumed dead'){
      	var estado = "Muerto/a";
      } else {
      	var estado = '?';
      }
      textoApi.innerHTML = '<ul> <li class="boton2 boton2_1"><a href="#" id="btnBrBad" onclick="brbadrandom()" target=""> <div class="centro"> <img src="bbad.png" width="30px"> <span class="redsoc"> Breaking Bad</span> </div> </a></li> </ul>  <br> Personaje aleatorio seleccionado: ' + response[numeroRandom].name +  ' <br> Apodo: ' + response[numeroRandom].nickname + '<br> Ocupacion: ' + response[numeroRandom].occupation[0] + '<br> Actor: ' + response[numeroRandom].portrayed + '<br> Estado: ' + estado + '<br> <img height="300px" src="' + response[numeroRandom].img + '">';
    },
    error: function(req, status, err){
			console.log(req, status, err);
			textoApi.innerHTML = '<ul> <li class="boton2 boton2_1"><a href="#" id="btnBrBad" onclick="brbadrandom()" target=""> <div class="centro"> <img src="bbad.png" width="30px"> <span class="redsoc"> Breaking Bad</span> </div> </a></li> </ul>  <br> ERROR';
	}
	});
}
						
function harporandom(){
	$.ajax({
    url:"http://hp-api.herokuapp.com/api/characters",
    type:'GET',
    success: function(response){
      console.log(response);
      var numeroRandom = Math.round(Math.random()*(response.length - 1));
      textoApi.innerHTML = '<ul> <li class="boton2"> <a href="#" id="btnHarPo" onclick="harporandom()" target=""> <div class="centro"> <img src="hp.png" width="30px"> <span class="redsoc">  Harry Potter</span> </div> </a></li> </ul> <br> Nombre: ' + response[numeroRandom].name + '<br> Actor: ' + response[numeroRandom].actor + '<br> Casa: ' + response[numeroRandom].house + '<br> Especie: ' + response[numeroRandom].species + '<br> <img height="300px" src="' + response[numeroRandom].image + '">';
    },
    error: function(req, status, err){
			console.log(req, status, err);
			textoApi.innerHTML = '<ul> <li class="boton2"> <a href="#" id="btnHarPo" onclick="harporandom()" target=""> <div class="centro"> <img src="hp.png" width="30px"> <span class="redsoc">  Harry Potter</span> </div> </a></li> </ul> <br> ERROR';
	}
	});
}



//Clima



btnW.onclick = function weather(){
	var claseApi = textoApi.className;
	if(claseApi == 'disNone' || claseApi == 'api1' || claseApi == 'api2' || claseApi == 'api3'){
		textoApi.innerHTML = ' <label for="">Zona</label> <br> <fieldset id="buscador"><select name="zon" id="zon"> <option value="">Selecciona una zona...</option><option value="468739">Buenos Aires, Argentina</option> <option value="455819">Brasilia, Brasil</option> <option value="349859">Santiago, Chile</option> <option value="2459115">Nueva York, EEUU</option> <option value="2450022">Miami, EEUU</option> <option value="2514815">Washington DC, EEUU</option><option value="2442047">Los Angeles, EEUU</option><option value="2436704">Las Vegas, EEUU</option><option value="2367105">Boston, EEUU</option><option value="116545">Mexico city, Mexico</option><option value="44418">Londres, Inglaterra</option><option value="766273">Madrid, Espana</option><option value="721943">Roma, Italia</option><option value="615702">Paris, Francia</option><option value="638242">Berlin, Alemania</option></select><button id="buscartweet" onclick="listarWea()" ><i class="fas fa-search"></i></button></fieldset>';
		textoApi.setAttribute("class","api4");
	} else {
		textoApi.setAttribute("class","disNone");
	}
}


function listarWea(){
	var idZona = document.getElementById("zon").value;
	console.log(idZona);

	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"+idZona,
		method: "GET",
		dataType: "json",
		success: function(response){
			console.log(response);
			var clima = '';
			var dia = response.time.split("T");
			var hora = dia[1].split(".");
			var img = '';
			switch(response.consolidated_weather[0].weather_state_abbr){
				case 'hc':
					img = 'https://www.metaweather.com/static/img/weather/png/64/hc.png';
					clima = 'Muy Nublado';
					break;
				case 'sn':
					img = 'https://www.metaweather.com/static/img/weather/png/64/sn.png';
					clima = 'Nieve';
					break;
				case 'sl':
					img = 'https://www.metaweather.com/static/img/weather/png/64/sl.png';
					clima = 'AguaNieve';
					break;
				case 'h':
					img = 'https://www.metaweather.com/static/img/weather/png/64/h.png';
					clima = 'Granizo';
					break;
				case 't':
					img = 'https://www.metaweather.com/static/img/weather/png/64/t.png';
					clima = 'Tormenta';
					break;
				case 'hr':
					img = 'https://www.metaweather.com/static/img/weather/png/64/hr.png';
					clima = 'Fuerte Lluvia';
					break;
				case 's':
					img = 'https://www.metaweather.com/static/img/weather/png/64/s.png';
					clima = 'Llovizna';
					break;
				case 'lr':
					img = 'https://www.metaweather.com/static/img/weather/png/64/lr.png';
					clima = 'Debil Lluvia';
					break;
				case 'lc':
					img = 'https://www.metaweather.com/static/img/weather/png/64/lc.png';
					clima = 'Poco Nublado';
					break;
				case 'c':
					img = 'https://www.metaweather.com/static/img/weather/png/64/c.png';
					clima = 'Despejado';
					break;
				default:
					clima = 'Incognita';
					break;
			}

			textoApi.innerHTML = '<label for="">Zona</label> <br> <fieldset id="buscador"><select name="zon" id="zon"> <option value="">Selecciona una zona...</option> <option value="468739">Buenos Aires, Argentina</option> <option value="455819">Brasilia, Brasil</option> <option value="349859">Santiago, Chile</option> <option value="2459115">Nueva York, EEUU</option> <option value="2450022">Miami, EEUU</option> <option value="2514815">Washington DC, EEUU</option><option value="2442047">Los Angeles, EEUU</option><option value="2436704">Las Vegas, EEUU</option><option value="2367105">Boston, EEUU</option><option value="116545">Mexico city, Mexico</option><option value="44418">Londres, Inglaterra</option><option value="766273">Madrid, Espana</option><option value="721943">Roma, Italia</option><option value="615702">Paris, Francia</option><option value="638242">Berlin, Alemania</option></select><button id="buscartweet" onclick="listarWea()" ><i class="fas fa-search"></i></button></fieldset> <br><br> Zona: '+ response.parent.title + ', '+ response.title + '<br> Dia: '+ dia[0]+ '<br> Hora: '+ hora[0]+ '<br> Humedad: '+ response.consolidated_weather[0].humidity+ '% <br> Temperatura maxima: '+ Math.round(response.consolidated_weather[0].max_temp)+ '<br> Temperatura minima: '+ Math.round(response.consolidated_weather[0].min_temp) + ' <br> Clima: '+clima+ ' <br><br> <img src="'+img+'">';
		},
		error: function(req, status, err){
			console.log(req, status, err);
			textoApi.innerHTML = '<label for="">Zona</label> <br> <fieldset id="buscador"><select name="zon" id="zon"> <option value="">Selecciona una zona...</option> <option value="468739">Buenos Aires, Argentina</option> <option value="455819">Brasilia, Brasil</option> <option value="349859">Santiago, Chile</option> <option value="2459115">Nueva York, EEUU</option> <option value="2450022">Miami, EEUU</option> <option value="2514815">Washington DC, EEUU</option><option value="2442047">Los Angeles, EEUU</option><option value="2436704">Las Vegas, EEUU</option><option value="2367105">Boston, EEUU</option><option value="116545">Mexico city, Mexico</option><option value="44418">Londres, Inglaterra</option><option value="766273">Madrid, Espana</option><option value="721943">Roma, Italia</option><option value="615702">Paris, Francia</option><option value="638242">Berlin, Alemania</option></select><button id="buscartweet" onclick="listarWea()" ><i class="fas fa-search"></i></button></fieldset> <br><br> No has seleccionado ninguna zona';
		}
});
}



