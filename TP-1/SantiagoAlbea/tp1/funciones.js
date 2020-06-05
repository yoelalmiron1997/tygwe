var bearer = '';
var liga = '';
var user = '';


$(document).ready(function(){
	var parrafo = document.getElementById("frase");
		
	text_array = new Array(
	"Lorem ipsum dolor sit amet",
	"Esta es una frase aleatoria",
	"Bienvenidos",
	);
		
	var numero = Math.round(Math.random()*(text_array.length -1));
		
	parrafo.innerHTML=(text_array[numero]);

	if (numero == 0) {
		parrafo.setAttribute("class","frase1");
	} else if (numero == 1){
		parrafo.setAttribute("class","frase2");
	}else{
		parrafo.setAttribute("class","frase3");
	}
	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token",
		method: "POST",
		headers: {
			'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'Authorization': 'Basic ' + btoa('wYPZtCCRBmlkFORDLY5kfe2Hq:EXcwrQf8UTiPAJqvEjvlmFM6noFGgV0PWIgP0QhEAR3NLXl4wy')
		},

		data: {
			grant_type: 'client_credentials'
		},
		success: function(response){
			bearer=response.access_token;
		},
		error: function(req, status, err){
			console.log(req, status, err);
		}  

	});
	
//wYPZtCCRBmlkFORDLY5kfe2Hq:EXcwrQf8UTiPAJqvEjvlmFM6noFGgV0PWIgP0QhEAR3NLXl4wy
});
function verTweet(){
	user=document.getElementsByName("user")[0].value;
	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + user,
		method: "GET",
		headers: {
			'Content-type': 'application/json',
			'Authorization': 'Bearer ' + bearer
		},
		success: function(response){
			clearClima();
			var parr=document.getElementById("api");
			console.log(response);
			
			if (response.length == 0){
				parr.innerHTML='El usuario no tiene tweets';
			}else{
				var seguidores=0;
				var siguiendo=0;
				if (response[0].user.following != null){
					siguiendo=response[0].user.following;
				}
				if (response[0].user.followers_count != null){
					seguidores=response[0].user.followers_count;
				}
				parr.innerHTML='Descripcion del usuario: ' + response[0].user.description + '<br>Foto de perfil: <br><img src="' + response[0].user.profile_image_url_https + '"><br>Seguidores: ' + seguidores + '<br>Siguiendo: ' + siguiendo + '<br>Último tweet: <br>' + response[0].text;
			}
			

		},
		error: function(req, status, err){
			console.log(req, status, err);
			var parr=document.getElementById("api");
			parr.innerHTML='No se encontro el usuario';
		}  

	});
}

function getUser(){
	var block=document.getElementById("apis");
	block.setAttribute("class","frases");
	var parr=document.getElementById("tweet");
	clearClima();
	parr.setAttribute("class"," ");
	var parr=document.getElementById("api");
	parr.innerHTML="";
}

function italia(){
	liga="ITALY: Serie A";
	futbol();
}

function inglaterra(){
	liga="ENGLAND: Premier League";
	futbol();		
}

function espana(){
	liga="SPAIN: La Liga";
	futbol();
}

function futbol(){
	$.ajax({
		url: "https://www.scorebat.com/video-api/v1/",
		method: "GET",
		dataType: "json",
		success: function(response){
			var i=0;
			clearClima();
			clearTweet();

			while (i<response.length){
				if (response[i].competition.name==liga){
					var parr=document.getElementById("api");
					parr.innerHTML="Partido: " + response[i].title + "<br><br>" + response[i].embed;
					i=response.length;
					var block=document.getElementById("apis");
					block.setAttribute("class","frases");
				}else{
				i++;
				}
			}
			
		}
	});
}

function covid(){
	$.ajax({
		url: "https://api.covid19api.com/total/country/argentina",
		method: "GET",
		dataType: "json",
		success: function(response){
			clearClima();
			clearTweet();
			var actual = response.length -1;
			var parr=document.getElementById("api");
			parr.innerHTML="Últimos datos oficiales:" + "<br>" + "Confirmados: " + response[actual].Confirmed + "<br>" + "Activos: " + response[actual].Active + "<br>" + "Muertos: " + response[actual].Deaths + "<br>" + "Recuperados: " + response[actual].Recovered;
			var block=document.getElementById("apis");
			block.setAttribute("class","frases");
		}
	});
}

function clima(){
	clearTweet();
	var div=document.getElementById("clima");
	div.setAttribute("class"," ");
	var block=document.getElementById("apis");
	block.setAttribute("class","frases");
	var parr=document.getElementById("api");
	parr.innerHTML="";
}
function getClima(){
	var valor = $( "#ciudad" ).val();

	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" + valor,
		method: "GET",
		dataType: "json",
		success: function(response){
			var icono="https://www.metaweather.com/static/img/weather/png/64/" + response.consolidated_weather[0].weather_state_abbr + ".png";
			var parr=document.getElementById("api");
			parr.innerHTML='Temperatura actual: ' + response.consolidated_weather[0].the_temp.toFixed(1) + '<br> Maxima: ' + response.consolidated_weather[0].max_temp.toFixed(1) + '<br> Minima: ' + response.consolidated_weather[0].min_temp.toFixed(1) + '<br>Humedad: ' + response.consolidated_weather[0].humidity + '%<br> <img alt="icono" src="' + icono + '">';
			var block=document.getElementById("apis");
			block.setAttribute("class","frases");
			
		}
	});
}
function clearClima(){
	var parr=document.getElementById("clima");
	parr.setAttribute("class","hide");
}
function clearTweet(){
	var parr=document.getElementById("tweet");
	parr.setAttribute("class","hide");
}