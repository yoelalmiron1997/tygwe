var random= Math.random();
    var frase = ["El problema que hay con los programadores es que nunca puedes contar lo que un programador está haciendo hasta que es demasiado tarde -- Seymour Cray","Medir el progreso del desarrollo de software por líneas de código es como medir el progreso de la construcción de un avión por su peso -- Bill Gates","¿Cincuenta años de investigación en lenguajes de programación, y acabamos con C++?-- Richard A. O'Keefe "];   
    if (random >0 && random < 0.33){
            $(".container").append("<p>"+frase[0]+"</p><br>")
        }else if(random >0.33 && random < 0.66){

            $(".container").append("<p>"+frase[1]+"</p><br>")
        }else if (random >0.66 && random < 0.99) {
            $(".container").append("<p>"+frase[2]+"</p><br>")
        }