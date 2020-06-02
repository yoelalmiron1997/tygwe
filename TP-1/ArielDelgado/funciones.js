// LINK API1 https://anapioficeandfire.com/Documentation
//API 1 = Trae el nombre de 2 libros al azar, la api cuenta con un total de 12 libros. Busque las imagenes por que en la api no habia.

//LINK API2 https://pokeapi.co/docs/v2
//API 2 = Trae el nombre de 2 pokémon al azar, junto con su imagen, de un total de 150 correspondiente a la primera
//generacion de pokémon

var lista = []
var portadas =  [
    {url:"media/1.jpg"},
    {url:"media/2.jpg"},
    {url:"media/3.jpg"},
    {url:"media/4.jpg"},
    {url:"media/5.jpg"},
    {url:"media/6.jpg"},
    {url:"media/7.jpg"},
    {url:"media/8.jpg"},
    {url:"media/9.png"},
    {url:"media/10.jpg"},
    {url:"media/11.jpg"},
    {url:"media/12.jpg"}
]


function consultarLibros(){
    document.getElementById("video").style.display = "none"
    document.getElementById("listaLibros").style.visibility = "visible"
    let primerName = Math.ceil(Math.random() * 6)
    let segundoName = Math.ceil(Math.random() * 6) + 6
    consultarLibro(primerName,1)
    consultarLibro(segundoName,2)
}

function consultarLibro(name,num){
    fetch(`https://www.anapioficeandfire.com/api/books/${name}`)
    .then(response => response.json())
    .then(data => {
        lista = document.getElementById("listaLibros")
        var item = lista.querySelector(`#libro-${num}`)
        var nombre = item.getElementsByTagName("p")
        nombre[0].textContent = data.name
        document.getElementById('imagen' + num).innerHTML =  '<img src="'+portadas[Number(name)-1].url+'">'
    });
}

var lista2 = []


function consultarPokemon(id, num){
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(function(response){
    response.json()
    .then(function(pokemon){
        crearPokemon(pokemon, num)
      
    })
})
}

function consultarPokemones(){
    document.getElementById("video").style.display = "none"
    document.getElementById("listaPokemon").style.visibility = "visible"
    document.getElementById("vss").style.visibility = "visible"
    let primerId = Math.round(Math.random() * 150)
    let segundoId = Math.round(Math.random() * 150)
    consultarPokemon(primerId, 1)
    consultarPokemon(segundoId, 2)
}

function crearPokemon(pokemon, num){
    lista2 = document.getElementById("listaPokemon")
    var item = lista2.querySelector(`#pokemon-${num}`)

    let imagen = item.getElementsByTagName("img")
    imagen[0].setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName("p")
    nombre[0].textContent =pokemon.name
}
