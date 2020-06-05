//Distintas frases

function elegirFrase() {
	let randomfrase = Math.floor((Math.random() * 3) + 1);
	let plh = "";
	switch (randomfrase) {
		case 1: plh = "Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira para cruzar la calle - Stephen Hawking"; document.getElementById("frase1").innerHTML = '<p>' + plh + '</p>'; break;
		case 2: plh = "Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso - Bill Gates"; document.getElementById("frase2").innerHTML = '<p>' + plh + '</p>'; break;
		case 3: plh = "Solo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer - Alan Turing"; document.getElementById("frase3").innerHTML = '<p>' + plh + '</p>'; break;
	}
}