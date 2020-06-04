

var Frase=new Array()

Frase[0] = "<p>El universo te trae exactamente lo que necesitas vivir, tambien te aleja de lo que necesitas dejar ir</p>";

Frase[1] = "<p>Disfruta lo que estas viviendo en este momento, todo es temporal</p>";

Frase[2] = "<p>Todo lo bueno comienza cuando empezas a confiar en vos</p>";

var longitud = Frase.length;

var mostrar=Math.round(Math.random()*(longitud-1));

function escribir() {
document.write(Frase[mostrar]);
}




