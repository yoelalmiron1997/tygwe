var frase1="esta es la frase1";
var frase2="aca esta la frase 2";
var frase3="esta es la frase3";
function cambiarMensaje() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            document.getElementById("frasespan").innerHTML=frase1;
            document.getElementById("frasespan").style.color="red";
            break;
        case 1:
            document.getElementById("frasespan").innerHTML=frase2;
            document.getElementById("frasespan").style.color="blue";
            break;
        case 2:
            document.getElementById("frasespan").innerHTML=frase3;
            document.getElementById("frasespan").style.color="green";
            break;
    
        default:
            alert("algo salio mal :/");
            break;
    }

}