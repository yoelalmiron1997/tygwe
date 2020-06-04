var bearer = '';

async function getToken() {
	await $.ajax({
		url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'Authorization': 'Basic ' + btoa('ZoL3uQCgwCvT4fl7PR7hmr4DP:7UtEPYBqil97B1LtTcV31ajWuajOq60vghvmabbrDu8kTZrMV8')
		},
		data: {
			grant_type: 'client_credentials'
		},
		success: function(response) {
			bearer = response.access_token;
		},
		error: function(req, status, err) {
			console.log(req, status, err);
		}
	});

}

function getTweets() {
	$.ajax({
		url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=chapita_20',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + bearer
		},
		success: function(response) {
			
			document.getElementById('contenido').innerHTML = `

			<h1 style="text-align:center">Ultimos Tweets de Juan Cruz</h1><hr style="margin-bottom:25px">

				
			<img id="imagen" src="${response[0].user.profile_image_url}">
			<p id="nombre"><strong>Nombre de usuario: </strong>${response[0].user.name}</p>
			<p id="tweet"><strong>Tweet: </strong>${response[0].text} <hr></p>


			<img id="imagen" src="${response[1].user.profile_image_url}">
			<p id="nombre"><strong>Nombre de usuario: </strong>${response[1].user.name}</p>
			<p id="tweet"><strong>Tweet: </strong>${response[1].text} <hr></p>

			<img id="imagen" src="${response[2].user.profile_image_url}">
			<p id="nombre"><strong>Nombre de usuario: </strong>${response[2].user.name}</p>
			<p id="tweet"><strong>Tweet: </strong>${response[2].text} <hr></p>

			`;
		},
		error: function(req, status, err) {
			console.log(req, status, err);
		}
	});
}

function hola () {

	getToken();
	setTimeout(() => {
		getTweets();
	}, 5000);
	
}




		



