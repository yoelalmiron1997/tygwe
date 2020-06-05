//Api 1

var lista = document.getElementById("listaCerveza")

function consultarCerveza(beer_name, num) {
    fetch(`https://api.punkapi.com/v2/beers/${beer_name}`)
    .then(function (response) {
        response.json()
        .then(function (beers) {
            crearCerveza(beers, num)
        })
    })
} 

function verificarCerveza() {
    document.getElementById("listaCerveza").style.display= "block";
    document.getElementById("listaCerveza").style.visibility = "visible";
    document.getElementById("principal").style.display = "none";
    
    let primerbeer_name = Math.round(Math.random() *30)
    let segundobeer_name = Math.round((Math.random() *30) + 15);
        
    consultarCerveza(primerbeer_name, 1)
    consultarCerveza(segundobeer_name, 2)
}

function crearCerveza(beers, num) {
   var item = lista.querySelector(`#cerveza-${num}`)

   var imagen = item.getElementsByTagName("img")
   imagen[0].setAttribute("src", beers[0].image_url)
   
   var nombre = item.getElementsByTagName("p")
   nombre[0].textContent = beers[0].name
}  


// API 2

var lista = document.getElementById("listaCerveza")
        
function consultarPersonajes(char_id, num){
    fetch(`https://www.breakingbadapi.com/api/characters/${char_id}`)
    .then(function (response) {
        response.json()
        .then(function (breaking) {
            crearBreaking(breaking, num)
        })
    })
   
}    

function verificarPersonaje() {
    document.getElementById("listaCerveza").style.display= "block";
    document.getElementById("listaCerveza").style.visibility = "visible";
    document.getElementById('principal').style.display = "none";
    
    let primerchar_id = Math.round(Math.random() *30)
    let segundochar_id = Math.round((Math.random() *30) + 15);

    consultarPersonajes(primerchar_id, 1)
    consultarPersonajes(segundochar_id, 2)
}

function crearBreaking(breaking, num) {
    
    var item = lista.querySelector(`#cerveza-${num}`)

    var foto = item.getElementsByTagName("img")
    foto[0].setAttribute("src", breaking[0].img)

    var nombre = item.getElementsByTagName("p")
    nombre[0].textContent = breaking[0].name
} 


    



