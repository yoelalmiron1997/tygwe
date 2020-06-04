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

$(document).ready(function(){

    $(".coronavirus").hide();
    frase();

    $("#botoncorona").on("click",datosCorona);

    const link = "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"
    $("#botonperro").click(function(){
        $.ajax({
            url: link,
            type: "GET",
            success: function(imagen){
                window.open(imagen,"","width=300,height=400");
            },
            error: function(error){
                console.log(error)
            }
        });
    });

    function datosCorona(){
        const link2 = "https://api.covid19api.com/summary"
        $("#botoncorona").click(function(){
            $.ajax({
                url: link2,
                type: "GET",
                success: function(resultados){
                    $('.principal').empty()
                    .append("<br><br><br><br><br>")
                    .append("Contagiados a nivel mundial: " + resultados.Global.TotalConfirmed + "<br>")
                    .append("Muertos a nivel mundial: " + resultados.Global.TotalDeaths + "<br>")
                    .append("Recuperados a nivel mundial: " + resultados.Global.TotalRecovered + "<br>")
                    .append("Contagiados en Argentina: " + resultados.Countries[6].TotalConfirmed + "<br>")
                    .append("Muertos en Argentina: " + resultados.Countries[6].TotalDeaths + "<br>")
                    .append("Recuperados en Argentina: " + resultados.Countries[6].TotalRecovered + "<br>")
                },
                error: function(error){
                    console.log(error)
                }
            });
        });
    };
});