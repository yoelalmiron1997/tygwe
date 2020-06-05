//FRASE ALEATORIA Y SOMBRAS//
$(document).ready(function(){
	var frases= [ "Lorem ipsum dolor sit amet, consectetur", "adipiscing elit, sed eiusmod tempor", "tempor incidunt ut labore et dolore magna"];
	var q = frases.length;
	var numAleatorio=Math.round(Math.random()*(q-1));
	$('#fraseRandom').html(frases[numAleatorio]);

	
	if ($('#fraseRandom').html()==frases[0]){
		$('#fraseRandom').attr("id","frase1");
	};
	if ($('#fraseRandom').html()==frases[1]){
		$('#fraseRandom').attr("id","frase2");
	};
	if ($('#fraseRandom').html()==frases[2]){
		$('#fraseRandom').attr("id","frase3");
	};

});
//_________________________________________________________APIS_________________________________________________________//


function limpiarContenidoPincipal (){
	$('.contenidoPrincipal').attr("class","contenidoAPIS");
	$('.contenidoAPIS').empty();
}

//API SHIBA INU//
function shibaInu() {
	limpiarContenidoPincipal ();
	$.ajax({
		url: 'https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes',
		method: 'GET',
		success: function(response) {
			$('.contenidoAPIS').empty().append("<img id='shibaImg' src='"+ response +"'/>");

		},
		error: function(req, status, err) {
			$('.contenidoAPIS');
			alert(err);
		}
	});
}

//API PASTEBIN//
function pasteBin(){
	limpiarContenidoPincipal ();
	var codigoPastebin = "<label for='tituloPastebin'>Título</label><br><input id='tituloPastebin' name='tituloPastebin' value='' /><br><label for='contenidoPastebin'>Contenido</label><br><textarea id='contenidoPastebin' name='contenidoPastebin' rows='4' cols='50'></textarea><br><button onclick='tituloContenido();'>Crear</button>";
	$('.contenidoAPIS').append("<h1>Esta API permite crear un documento de texto temporal (10 min) en Pastebin.com </h1><br><hr><br>");
	$('.contenidoAPIS').append(codigoPastebin);
		
}

function tituloContenido (titulo, contenido){
	var titulo = $('#tituloPastebin').val();
	var contenido = $('#contenidoPastebin').val();
	crearPastebin(titulo, contenido);
}


function crearPastebin(titulo, contenido) {
	$.ajax({
		url: 'https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php',
		method: 'POST',
		data: {
 		   	'api_dev_key': 'f078e1b09458846894d781b36e9e5efb',
 			'api_option': 'paste',
  			'api_paste_code': contenido,
  			'api_paste_private' : '1', 
			'api_paste_name' : titulo + '.txt', 
			'api_paste_expire_date' :'10M',
			'api_paste_format' : 'text'
		},
		success: function(response) {
			$('.contenidoAPIS').empty().append("<a href='"+response+"'> Link del Pastebin </a>");
		},
		error: function(response) {
			$('.contenidoAPIS').empty();alert(err);
		}
	});
}

//API FACEBOOK//
function infoFRlPFB() {
	limpiarContenidoPincipal ();
	//Obtención del Token//
	$.ajax({
		url: 'https://cors-anywhere.herokuapp.com/https://graph.facebook.com/oauth/access_token?client_id=3323906874310528&client_secret=9bd97acb94f2f93866aec81273bac625&grant_type=client_credentials',
		method: 'GET',
		success: function(response) {
			bearer = response.access_token;
			
			//Obtención de infrmación de la API//
			$.ajax({
				url: 'https://cors-anywhere.herokuapp.com/https://graph.facebook.com/v7.0/591679571002599?fields=name%2Clink%2Cdescription%2Cengagement%2Clocation%2Chours%2Cabout&access_token='+bearer,
				method: 'GET',
				success: function(response) {
					$('.contenidoAPIS').empty().append("<h1>Información de la página de facebook de la facultad </h1><br><hr><br>");
					$('.contenidoAPIS').append("Nombre : " + response.name + "<br/><br/> Link : <a href='"+response.link+"'>Utn-Frlp</a> " + "<br/><br/> Descipcion : " + response.description +
					"<br/><br/>Likes : " + response.engagement.social_sentence + "<br/><br/> Calle : " + response.location.street  + "<br/><br/> Horarios <br/> Lunes : " +
					response.hours[0].value +"-"+ response.hours[1].value + "<br/> Martes : " + response.hours[2].value +"-"+ response.hours[3].value
					+ "<br/> Miercoles : " + response.hours[4].value +"-"+ response.hours[5].value + "<br/> Jueves : " + response.hours[6].value +"-"+ response.hours[7].value
					+ "<br/> Viernes : " + response.hours[8].value +"-"+ response.hours[9].value + "<br/> Sábado : " + response.hours[10].value +"-"+ response.hours[11].value );	
					},
				error: function(req, status, err) {
			$('.contenidoAPIS').empty();alert(err);
				}
			});

		},
		error: function(req, status, err) {
			$('.contenidoAPIS').empty();alert(err);
		}
	});

}

//API TWITTER//
function infoTendencias() {
	limpiarContenidoPincipal ();
	//Obtención del Token//
	$.ajax({
		url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'Authorization': 'Basic aGJjUDJ6OWtzcXdxVFVrbnNRUDRrbkw4RTowS2NsRE9pREJEQ2hhTTlsMlYzUjg3bmlLcDhoUG5YUUphQ0RrNEJQelV2TVlNclY3Wg=='
		},
		data: {
			grant_type: 'client_credentials'
		},
		success: function(response) {
			bearer = response.access_token;

			//Obtención de infrmación de la API//
			$.ajax({
				url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=1',
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + bearer
				},
				success: function(response) {
					$('.contenidoAPIS').empty().append("<h1>Información actual de las tendencias de Twitter </h1><br><hr><br>");
					$('.contenidoAPIS').append("Tendencias ("+response[0].as_of+")<br><br> 1: <a href='"+response[0].trends[0].url+"'>"+response[0].trends[0].name+"</a>"
					+ "<br> 2 : <a href='"+response[0].trends[1].url+"'>"+response[0].trends[1].name+"</a>"
					+ "<br> 3 : <a href='"+response[0].trends[2].url+"'>"+response[0].trends[2].name+"</a>"
					+ "<br> 4 : <a href='"+response[0].trends[3].url+"'>"+response[0].trends[3].name+"</a>"
					+ "<br> 5 : <a href='"+response[0].trends[4].url+"'>"+response[0].trends[4].name+"</a>"
					+ "<br> 6 : <a href='"+response[0].trends[5].url+"'>"+response[0].trends[5].name+"</a>"
					+ "<br> 7 : <a href='"+response[0].trends[6].url+"'>"+response[0].trends[6].name+"</a>"
					+ "<br> 8 : <a href='"+response[0].trends[7].url+"'>"+response[0].trends[7].name+"</a>"
					+ "<br> 9 : <a href='"+response[0].trends[8].url+"'>"+response[0].trends[8].name+"</a>"
					+ "<br> 10 : <a href='"+response[0].trends[9].url+"'>"+response[0].trends[9].name+"</a>" );
				},
				error: function(req, status, err) {
					$('.contenidoAPIS').empty();alert(err);
				}
			});

		},
		error: function(req, status, err) {
			$('.contenidoAPIS').empty();alert(err);
		}
	});
}
