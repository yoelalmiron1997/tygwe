var frases=["Si ya sabes que hacer y no lo haces, estas mucho peor que antes", "Es posible recuperarse de una derrota, pero cuesta más perdonarse a uno mismo por no haberlo intentado (George Edward Woodberry)", "El único lugar en el que el éxito viene antes que el trabajo es el diccionario (Vidal Sassoon)"];

console.log(frases[Math.floor(Math.random()*3)]);

window.onload= parafrasear();

function parafrasear(){
    $('.frase').empty();
    $('.frase').append(frases[Math.floor(Math.random()*3)]) ;
};

function tyc(){
    $('.social').empty();
    $('.social').append('<a class="twitter-timeline" data-width="800" data-height="600" data-theme="light" href="https://twitter.com/SC_ESPN?ref_src=twsrc%5Etfw">Tweets by SC_ESPN</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
};