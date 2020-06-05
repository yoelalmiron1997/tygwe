var quotes = ['La acción expresa las distintas prioridades.',
    'El hombre es producto de sus pensamientos.',
    'El débil jamás puede perdonar.',
    'La violencia es el miedo a los ideales del otro.',
    'La no violencia y la verdad son inseparables.'
    ];
$(document).ready(function () {
    newQuote();
});

function newQuote() {
    /*
    var random = Math.floor(Math.random() * 3);
    $("#frase").text(quotes[random]);
    random = Math.floor(Math.random() * 3);
    $("#frase").attr("class", "frase" + random);
    $("#frase").css("visibility", "visible");
    */
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];   

    $("#frase").text(quotes[randomNumber]);
    randomNumber = Math.floor(Math.random() * (quotes.length));

    document.getElementById('QuoteDisplay').setAttribute("class", "style1");
}

