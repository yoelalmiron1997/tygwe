var quotes = [
    "La vida no es un juego de suerte. Si quieres ganar, trabaja duro.",
    "Nuestra mayor gloria no está en nunca caer, sino en levantarnos cada vez que caemos.",
    "¿Hay alguna razón para no querer perder?",
    "Quien teme perder, ya fue vencido.",
    "El talento es algo que florece, el instinto es algo que perfeccionas."    
  ];

function frase(){
    var numeroFrase = Math.floor(Math.random()*(quotes.length));
    $("#fraseAleatoria").text(quotes[numeroFrase]);
    $("#fraseAleatoria").attr("class", "frase"+numeroFrase);
    $("#fraseAleatoria").css("visibility","visible");
}

$(document).ready(function(){
    frase();

    const link = "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"
    $("#botonShibe").click(function(){
        $.ajax({
            url: link,
            type: "GET",
            success: function(result){
                console.log(result);
                $("#fotoshibe").html('<img src="' + result + '" />');
            },
            error: function(error){
                console.log(error)
            }
        });
    });
});