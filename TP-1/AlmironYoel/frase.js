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
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];   
}

