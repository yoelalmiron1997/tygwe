/* Variables globales */

const frases = [
  "&ldquo;Ya de joven me había fijado en que ningún periódico cuenta nunca con fidelidad cómo suceden las cosas.&rdquo; - George Orwell",
  "&ldquo;Si algo significa la libertad es el derecho a decirle a la gente lo que no quiere oír.&rdquo; - George Orwell",
  "&ldquo;El nacionalista no solo no reprueba las atrocidades cometidas por su propio bando, sino que tiene una notable capacidad para no oír siquiera hablar de ellas.&rdquo; - George Orwell",
];
const breakingbad_url_base = "https://www.breakingbadapi.com/api";
const criptomonedas_url_base = "https://api.coinranking.com/v1/public";
const clima_url_base = "https://api.openweathermap.org/data/2.5/weather";
const api_key_clima = "0200a8565593b782f53c7dd433ec17ed";

const contenido = document.getElementById("contenido");
const presentacion = document.getElementById("presentacion");
const breakingbad = document.getElementById("api-breakingbad");
const criptomonedas = document.getElementById("api-criptomonedas");
const clima = document.getElementById("api-clima");

/* Funciones */

const obtenerFraseRandom = (frases) => {
  /* A partir de un numero random me devuelve 
  un parrafo con la frase */
  const indice = Math.floor(Math.random() * frases.length);
  return `<p class="frase-${indice}">${frases[indice]}</p>`;
};

const cargarContenidoInicial = (e) => {
  /* Obtiene la frase y la muestra en pantalla */
  e.preventDefault();

  const frase = obtenerFraseRandom(frases);
  const html = `
    <div class="inicial">
      <h3 class="titulo">Video de presentación</h3>
      <video autoplay controls class="video" src="../video/video.mp4"></video>
      <h3>Frase random</h3>
      ${frase}
    </div>
  `;
  contenido.innerHTML = html;
};

const formatearFechaNacimiento = (fecha) => {
  /* Toma la fecha en el formato mes-dia-año y 
  retorna dia-mes-año */
  let mes = fecha.slice(0, 2);
  let dia = fecha.slice(3, 5);
  let anio = fecha.slice(6, 10);
  return `${dia}-${mes}-${anio}`;
};

const generarHTMLConDatosDeWalterWhite = (datos, frase) => {
  /* Retorna el HTML con los datos traidos de la
  api de breaking bad */
  const { img, name, nickname, birthday } = datos[0];
  const { quote } = frase[0];

  // dia-mes-anio
  const fecha_nacimiento_formateada = formatearFechaNacimiento(birthday);

  return `
    <div class="api-breakingbad">
      <h3 class="titulo">Frase de Walter White (Breaking Bad)</h3>
      <img src=${img} height="400px"/>
      <p>
        <span>Nombre</span>: ${name}
      </p>
      <p>
        <span>Apodo</span>: ${nickname}</p>
      </p>
      <p>
        <span>Nacimiento</span>: ${fecha_nacimiento_formateada}</p>
      </p>
      <h5>Frase aleatoria del personaje:</h5>
      <blockquote>&ldquo;${quote}&rdquo;</blockquote>
    </div>
  `;
};

const mostrarError = (e) => {
  e.preventDefault();
  const error = `
    <h3 class="titulo">Hubo un error</h3>
    <p>Intente nuevamente</p>
  `;
  contenido.innerHTML = error;
};

const mostrarFraseWalterWhite = async (e) => {
  /* Se obtienen los datos de walter white y
  se muestran en pantalla */
  e.preventDefault();

  /* Llamadas a la api */
  const respuesta_datos_walter_white = await fetch(
    `${breakingbad_url_base}/characters/1`
  );
  const respuesta_frase_walter_white = await fetch(
    `${breakingbad_url_base}/quote/random?author=Walter+White`
  );

  /* Si fallaron las llamadas a la api que devuelva un error */
  if (!respuesta_datos_walter_white.ok || !respuesta_frase_walter_white.ok) {
    mostrarError();
    return null;
  }

  const datos_walter_white = await respuesta_datos_walter_white.json();
  const frase_walter_white = await respuesta_frase_walter_white.json();

  contenido.innerHTML = generarHTMLConDatosDeWalterWhite(
    datos_walter_white,
    frase_walter_white
  );
};

const formatearFechaTimestamp = (timestamp) => {
  /* Toma la fecha en el formato UNIX TimeStamp y 
  retorna dia-mes-año */
  let fecha = new Date(timestamp);
  let anio = fecha.getFullYear();
  let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
  let dia = ("0" + fecha.getDate()).slice(-2);
  return `${dia}-${mes}-${anio}`;
};

const formatearDescripcion = (descripcion) => {
  /* Toma los h3 que se encuentran en la descripcion
  que se obtiene de la api y los cambia por h6 */
  return descripcion.replace(/h3/g, "h6");
};

const mostrarCondicionalmenteLasDescripciones = () => {
  const descripciones = document.querySelectorAll(".descripcion");

  /* Por cada descripcion se le agrega a su link hijo la 
  funcionalidad de mostrar y esconder el contenido */
  descripciones.forEach((descripcion) => {
    const link = descripcion.children[0];
    const contenido_descripcion = descripcion.children[1];

    link.addEventListener("click", (e) => {
      e.preventDefault();

      if (contenido_descripcion.classList.contains("escondido")) {
        contenido_descripcion.classList.remove("escondido");
        link.textContent = "Esconder descripción";
      } else {
        contenido_descripcion.classList.add("escondido");
        link.textContent = "Ver descripción";
      }
    });
  });
};

const generarHTMLConDatosDeLasCriptomonedas = (criptomonedas, moneda) => {
  /* Retorna el HTML con los datos traidos de la
  api de criptomonedas */
  let html = `
    <div class="api-criptomonedas">
      <h3 class="titulo">Mis criptomonedas preferidas</h3>
  `;
  criptomonedas.map((criptomoneda) => {
    // dia-mes-anio
    const fecha_formateada = formatearFechaTimestamp(
      criptomoneda.allTimeHigh.timestamp
    );
    const descripcion = formatearDescripcion(criptomoneda.description);

    html += `
      <article>
        <img src=${criptomoneda.iconUrl} height="50px"></img>
        <h6>${criptomoneda.name} - ${criptomoneda.symbol}</h6>
        <p>
          <span>Precio</span>: ${criptomoneda.price} ${moneda}
        </p>
        <p>
          <span>Precio histórico más alto</span>: ${criptomoneda.allTimeHigh.price} ${moneda}
        </p>
        <p>
          <span>Fecha del precio histórico más alto</span>: ${fecha_formateada}
        </p>
        <div class="descripcion">
          <a class="link_descripcion" href="#">Ver descripción</a>
          <div class="contenido_descripcion escondido">
            ${descripcion}
          </div>
        </div>
      </article>
    `;
  });
  html += "</div>";

  return html;
};

const mostrarCriptomonedasPreferidas = async (e) => {
  /* Se obtienen los datos de las criptomonedas y
  se muestran en pantalla */
  e.preventDefault();

  const moneda = "USD";
  // btc, eth, usdt y bat
  const ids_monedas_preferidas = "1,2,8,46";
  const respuesta_criptomonedas = await fetch(
    `${criptomonedas_url_base}/coins?base=${moneda}&ids=${ids_monedas_preferidas}`
  );

  /* Si falla la llamada a la api que devuelva un error */
  if (!respuesta_criptomonedas.ok) {
    mostrarError();
    return null;
  }

  let datos_critomonedas = await respuesta_criptomonedas.json();
  const {
    data: { coins },
  } = datos_critomonedas;

  contenido.innerHTML = generarHTMLConDatosDeLasCriptomonedas(coins, moneda);
  mostrarCondicionalmenteLasDescripciones();
};

const mostrarFormulario = () => {
  /* Inserta el formulario en el HTML */
  contenido.innerHTML = `
    <div class="api-clima">
      <h3 class="titulo">Pronóstico del clima</h3>
      <form id="formulario-clima">
        <div class="form-group">
        <label for="ciudad">Ingrese la ciudad o provincia</label>
          <input type="text" class="form-control" id="ciudad">
          <small id="error-ciudad" class="form-text text-danger escondido">La ciudad o provincia es obligatoria</small>
        </div>
        <div class="form-group">
          <label for="pais">Seleccione el pais</label>
          <select class="form-control" id="pais">
            <option value="">-- Paises --</option>
            <option value="AR">Argentina</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <small id="error-pais" class="form-text text-danger escondido">El pais es obligatorio</small>
        </div>
        <button type="submit" class="btn btn-primary">Pronosticar</button>
      </form>
      <p id="error-ciudad-no-encontrada" class="escondido">No se encontraron resultados con esa ciudad o provincia, intente nuevamente<p>
    </div>
  `;

  const formulario_clima = document.getElementById("formulario-clima");
  formulario_clima.addEventListener("submit", realizarPronostico);
};

const generarHTMLConDatosDelClima = (datos) => {
  /* Retorna el HTML con los datos traidos de la
  api del clima */
  const { name, main, sys, wind } = datos;

  console.log(datos);
  /* Transformar la temperatura a grados centigrados */
  const temperatura = parseFloat(main.temp - 273.15, 10).toFixed(2);
  const temperatura_maxima = parseFloat(main.temp_max - 273.15, 10).toFixed(2);
  const temperatura_minima = parseFloat(main.temp_min - 273.15, 10).toFixed(2);

  const HHMMSS = (timestamp) => {
    /* Pasar a HH:MM:SS */
    return new Date(timestamp * 1000).toISOString().substr(11, 8);
  };

  const amanecer = HHMMSS(sys.sunrise);
  const atardecer = HHMMSS(sys.sunset);

  let imagen_src = "../img/calor.jpg";
  let imagen_alt = "calor";

  if (temperatura > 15 && temperatura <= 27) {
    imagen_src = "../img/templado.jpg";
    imagen_alt = "templado";
  } else if (temperatura <= 15) {
    imagen_src = "../img/frio.jpg";
    imagen_alt = "frio";
  }

  return `
    <div id="pronostico" class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src=${imagen_src} class="card-img" alt=${imagen_alt}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h6 class="card-title">Clima de ${name}</h2>
            <p class="card-text">
              Temperatura actual: ${temperatura} <span>&#x2103;</span>
            </p>
            <p class="card-text">
              Máxima/Mínima: ${temperatura_maxima} <span>&#x2103;/</span>${temperatura_minima} <span>&#x2103;</span>
            </p>
            <p class="card-text">
              Humedad: ${main.humidity} %
            </p>
            <p class="card-text">
              Viento: ${wind.speed} m/s
            </p>
            <p class="card-text">
              Amanener: ${amanecer}<img src="../img/amanecer.png">
            </p>
            <p>
              Atardecer: ${atardecer}<img src="../img/atardecer.png"> 
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
};

const mostrarPronostico = (datos) => {
  /* Inserta el pronostico en el HTML */
  const error = document.getElementById("error-ciudad-no-encontrada");
  error.classList.add("escondido");

  /* Si hubo un error, mostrarlo */
  if (!datos) {
    error.classList.remove("escondido");
    return;
  }

  /* Agregar pronostico al HTML */
  contenido.insertAdjacentHTML("beforeend", generarHTMLConDatosDelClima(datos));
};

const consultarAPIClima = async (ciudad, pais) => {
  /* Obtener datos del clima */
  const respuesta_clima = await fetch(
    `${clima_url_base}?q=${ciudad},${pais}&appid=${api_key_clima}`
  );

  let datos_clima = false;

  /* Si no falla la llamada a la api asignamos los datos */
  if (respuesta_clima.ok && respuesta_clima.cod !== "404") {
    datos_clima = await respuesta_clima.json();
  }

  mostrarPronostico(datos_clima);
};

const realizarPronostico = (e) => {
  e.preventDefault();

  /* Eliminar pronostico anterior */
  const pronostico_anterior = document.querySelectorAll("#pronostico");
  pronostico_anterior.forEach((elemento) => elemento.remove());

  /* Leer el pais seleccionado */
  const pais = document.getElementById("pais");
  const pais_seleccionado = pais.options[pais.selectedIndex].value.trim();

  const ciudad = document.getElementById("ciudad").value.trim();

  const error_pais = document.getElementById("error-pais");
  const error_ciudad = document.getElementById("error-ciudad");

  /* Validar formulario y mostrar error */
  if (pais_seleccionado === "" || ciudad === "") {
    if (pais_seleccionado === "") {
      error_pais.classList.remove("escondido");
    } else {
      error_pais.classList.add("escondido");
    }
    if (ciudad === "") {
      error_ciudad.classList.remove("escondido");
    } else {
      error_ciudad.classList.add("escondido");
    }
    return;
  }

  /* Esconder errores previos */
  error_pais.classList.add("escondido");
  error_ciudad.classList.add("escondido");

  consultarAPIClima(ciudad, pais_seleccionado);
};

/* Event listeners */
eventsListener();

function eventsListener() {
  document.addEventListener("DOMContentLoaded", cargarContenidoInicial);
  presentacion.addEventListener("click", cargarContenidoInicial);
  breakingbad.addEventListener("click", mostrarFraseWalterWhite);
  criptomonedas.addEventListener("click", mostrarCriptomonedasPreferidas);
  clima.addEventListener("click", mostrarFormulario);
}
