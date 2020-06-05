function fraseAleatoria() {
  var Cita = new Array();
  Cita[0] = "La innovación distingue a los líderes de los seguidores";
  Cita[1] = "El mayor riesgo es no correr ningún riesgo";
  Cita[2] = "El mundo se puede cambiar en 140 caracteres";
  Cita[3] = "Si tienes miedo a fracasar, no vas a llegar muy lejos";
  Cita[4] = "Tecnologia y gestión web 2020";
  Cita[5] = "Piensa Diferente";

  var lon = Cita.length;
  var mostrar = Math.round(Math.random() * (lon - 1));
  console.log("Frase a mostrar" + mostrar);
  const p = document.getElementById("frases");
  p.innerHTML = Cita[mostrar];

}

fraseAleatoria();
setInterval("fraseAleatoria()", 2000);
