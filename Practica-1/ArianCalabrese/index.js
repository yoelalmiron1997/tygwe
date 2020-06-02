var api1, api2, contenido;

function inicializar(){
    api1 = document.getElementById("apiUno");
    api2 = document.getElementById("apiDos");
    contenido = document.getElementById("principal");
    
    //EVENTOS
    api1.addEventListener('click',getPersonajes);
    api2.addEventListener('click',generarImagenes);
}

function generarFrase(){
var frases = ["Nunca he conocido a un hombre tan ignorante que no pudiera aprender algo de él, Galileo Galilei",
                "Los hombres construimos demasiados muros y no suficientes puentes, Isaac Newton",
                "El amigo debe ser como el dinero; antes de necesitarlo, es necesario saber su valor, Sócrates"];

var estilos = ["1px 1px  #e74c3c", "2px 2px #8e44ad", "3px 3px  #27ae60"];
let random = Math.floor(Math.random()*frases.length);

document.getElementById("frase").style.textShadow = estilos[random];
document.getElementById("frase").innerHTML = frases[random];

}

function getPersonajes(){
    contenido.innerHTML = "";
    const link = 'https://rickandmortyapi.com/api/character/';
        fetch(link)
        .then(res => res.json())
        .then(data => {
            for (let index = 0; index < 20; index++) {
                contenido.innerHTML += 
                `
                <div class="img-api1">
                <img src="${data.results[index].image}">
                <p class"nombrePersonaje">${data.results[index].name}</p>
                <p class="ClaseGenero">${data.results[index].gender}</p>
                <p class="ClaseStatus">${data.results[index].status}</p>
                </div>
                `
            }    
        

        })

}

function generarImagenes(){
    contenido.innerHTML = "";
    let link = 'https://picsum.photos/v2/list?page=3&limit=30';
        fetch(link)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            for (let index = 0; index < 30; index++) {
                contenido.innerHTML += 
                `
                <div class="img-api2">
                <img src="${data[index].download_url}">
                </div>
                `
            }    
        })
}
