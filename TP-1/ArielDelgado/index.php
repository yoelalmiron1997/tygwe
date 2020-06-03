<!DOCTYPE html>
<html>

<head>
<title>TyGweb</title>
<meta charset="UTF-8">
<link rel="shortcut icon" href="media/icono_api.png" type="image/png">
<link rel="stylesheet" type="text/css" href="styles.css">
<script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
<script src="funciones.js"></script>

</head>

 
<body>

  
   <!--Cabecera con el título-->
        <header class="cabecera">
            <img id="logo"src="media/leon.png">
            <h1>Trabajo Práctico N°1 - Delgado Ariel Alejandro</h1>
        </header>

    <!--Sidebar-->
        <aside class="sidebar">
            <a id="elemento-sidebar" onclick="consultarLibros()">Libros</a>
            <a id="elemento-sidebar" onclick="consultarPokemones()">Pelea Pokémon</a>
        </aside>

    <!--Frases al azar con php-->
    <p> <?php
        $frases= array(
			1 => "A la grande le puse cuca",
			2 => "Siempre dudé de la existencia de Dios. Ahora sé que existe, soy yo",
			3 => "Hablé más fuerte que tengo una toalla",
			);
		$numero = rand(1,3);
			if ( $numero == '1') {						
			echo "<p class='frase1'>$frases[$numero]</p>";
			}
			if ($numero == '2') {					
			echo "<p class='frase2'>$frases[$numero]</p>";
			}
			if ($numero == '3') {										
			echo "<p class='frase3'>$frases[$numero]</p>";
			}							
	?> </p>

    <div class="conteiner" >
        <embed src="media/Presentación.mp4" id="video" controls >
    </div>
    
    <!--API D&D - Libros de GEORGE R.R MARTIN -->
    <div class="libros" id="listaLibros">
        <div class="contenedorlibro" id="libro-1">
            <p></p>
            <div id="imagen1">
            </div>
        </div>
        <div class="contenedorlibro" id="libro-2">
            <p></p>
            <div id="imagen2">
            </div>
        </div>
    </div>

    <!-- API POKEAPI -->
    <div class="pokemon-list" id="listaPokemon">
        <div class="pokemon" id="pokemon-1">
            <img class="imagen" src="" alt="">
            <p></p>
        </div>
        <div class="vs" id="vss">Vs.</div>
        <div class="pokemon" id="pokemon-2">
            <img class="imagen" src="" alt="">
            <p></p>
        </div>
    </div>
    
    <!--FOOTER FOOTER FOOTER FOOTER-->
    <footer>
        Tecnología y Gestión Web 5/6/2020
    </footer>
    
    
</body>

</html>