const api_key = '7e67b80741bafee8e67ab908c7e33b48'
var fraces = [	'Si la limosna es de cuant&iacute;a hasta el santo desconf&iacute;a',
				'El lujo es vulgaridad dijo y me conquist&oacute;',
				'Sabe mas el diablo por viejo que por diablo']

function azar(){
	return(Math.floor((Math.random()*10)%3))
}

function print_frace(){
	$('.content').empty()
	$('.content').append('<I>' + fraces[azar()] + '</I>')
}

function print_menu(){
	$('#botones').append("<ul class='botones'><li id='b1'>Cat Facts</li>" +
						 "<li id='b2'>El tiempo</li></ul>")
	$('#b1').on('click',get_cat_fact)
	$('#b2').on('click',get_weather)
}

function main(){
	print_frace()
	print_menu()
}

function get_weather(){
	$('.content').empty()
	.append('<img src="img/loading.gif">')
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (this.readyState == 4){ 
			$('.content').empty()
			if (this.status == 200){
				//handler(this.response);
				$('.content').append('<img id="img_weather">')
				var img = document.getElementById('img_weather');
				var url = window.URL || window.webkitURL;
				img.src = url.createObjectURL(this.response);
			} else {
				alert("Error:" + this.status)
			}
		}
	}
	xhr.open('GET', 'http://www.7timer.info/bin/civil.php?lon=-57.9545288&lat=-34.9214516&ac=0&lang=es&unit=metric&output=internal&tzshift=0');
	xhr.responseType = 'blob';
	xhr.send();	  
}

function get_cat_fact(){
	$.ajax({
		method: 'GET',
		cache: false,
		url: 'https://cat-fact.herokuapp.com/facts/random',
		dataType: 'json',
		contentType: 'application/json',
		beforeSend: function(){
			$('.content').empty()
			.append('<img src="img/loading.gif">')
		},
		success: function(data){
			$('.content').empty()
			.append('<I>' + data.text + '</I>')
		},
		error: function(jqXHR,textStatus,errorThrown){
			$('.content').empty()
			alert(err)
		}
	})
}
