var frases=["Si ya sabes que hacer y no lo haces, estas mucho peor que antes", "Es posible recuperarse de una derrota, pero cuesta más perdonarse a uno mismo por no haberlo intentado (George Edward Woodberry)", "El único lugar en el que el éxito viene antes que el trabajo es el diccionario (Vidal Sassoon)"];



window.onload= parafrasear();


function parafrasear(){
    $('.frase').empty();
    $('.frase').append(frases[Math.floor(Math.random()*3)]) ;
};

function tyc(){
    $('#face').css({
        'display': 'none'
    });
    $('#video2').css({
        'display': 'none'
    });
    $('#covid').css({
        'display': 'none'
    });
    
    $('.social').css({
        'display': 'unset'
    });
};

$('#facebook').click(function() {
    $('.social').css({
        'display': 'none'
    });
    $('#video2').css({
        'display': 'none'
    });
    $('#covid').css({
        'display': 'none'
    });
    $('#face').css({
        'display': 'unset'
    });
});

$('#video').click(function() {
    $('.social').css({
        'display': 'none'
    });
    $('#face').css({
        'display': 'none'
    });
    $('#covid').css({
        'display': 'none'
    });
    $('#video2').css({
        'display': 'unset'
    });
});

$('#coronavirus').click(function(){
    fetch('https://api.covid19api.com/dayone/country/argentina/status/confirmed')
  .then(function(response) {
    return response.json();
  })
    .then(function(myJson) {
        $('.social').css({
            'display': 'none'
        });
        $('#face').css({
            'display': 'none'
        });
        $('#video2').css({
            'display': 'none'
        });
        $('#covid').css({
            'display': 'unset'
        });
    $('#covid').empty();
    $('#covid').append(`<h3>Argentina</h3> <h4> Casos = ${myJson.pop().Cases}</h4>`);
  });
});