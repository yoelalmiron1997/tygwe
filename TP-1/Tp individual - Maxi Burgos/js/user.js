var contenido = document.querySelector('#contenido')
function traer() {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
     console.log(data.results['0'])
     contenido.innerHTML = `
     <img class="is-rounded" src="${data.results['0'].picture.large}" width="150px">
     <p><strong>Nombre:${data.results['0'].name.first}</strong></p>
     <p><strong>Edad:${data.results['0'].dob.age}</strong></p>
     <p><strong>Nacimiento:${data.results['0'].dob.date}</strong></p>
     <p><strong>Ciudad:${data.results['0'].location.city}</strong></p>
     <p><strong>Email:${data.results['0'].email}</strong></p>
     <p><strong>Telefono:${data.results['0'].phone}</strong></p>
     `
     })
}
