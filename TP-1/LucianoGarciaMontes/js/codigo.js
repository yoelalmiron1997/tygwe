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
};

function nuevaFrase(){
    var numFrase = Math.floor(Math.random()*(quotes.length));
    $("#fraseAleatoria").text(quotes[numFrase]);
    $("#fraseAleatoria").attr("class", "frase"+numFrase);
    $("#fraseAleatoria").css("visibility","visible");
};

$(document).ready(function(){

    $(".coronavirus").hide();
    frase();

    $("#botonperro").on("click",function(){
        $(".coronavirus").hide();
        $(".fotoperro").show();
    });

    $("#botoncorona").on("click",function(){
        $(".fotoperro").hide();
        $(".fotoperro").empty();
        $(".coronavirus").show();
    });

    const link = "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"
    $("#botonperro").click(function(){
        $.ajax({
            url: link,
            type: "GET",
            success: function(imagen){
                console.log(imagen);
                $(".fotoperro").html('<img src="' + imagen + '" />');
            },
            error: function(error){
                console.log(error)
            }
        });
    });

    const link2 = "https://api.covid19api.com/summary"
    $("#botoncorona").click(function(){
        $.ajax({
            url: link2,
            type: "GET",
            success: function(resultados){
                console.log(resultados);
                $("#confMundo").html(resultados.Global.TotalConfirmed);
                $("#muerMundo").html(resultados.Global.TotalDeaths);
                $("#recMundo").html(resultados.Global.TotalRecovered);
                $("#confArg").html(resultados.Countries[6].TotalConfirmed);
                $("#muerArg").html(resultados.Countries[6].TotalDeaths);
                $("#recArg").html(resultados.Countries[6].TotalRecovered);
            },
            error: function(error){
                console.log(error)
            }
        });
    });
});