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

function main(){
	print_frace()
}
