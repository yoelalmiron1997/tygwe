<!DOCTYPE html>
<html lang="es">

  <head>
     <meta charset="utf-8"/>
     <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
     <script type="text/javascript" src="js/scripts.js"></script>
     <link rel="stylesheet" type="text/css" href="css/estilo.css">
     <title>TP1 TygWeb</title>
  </head>

  <body onload="frasesaleatorias();">

    <header>
      <img class="logo" src="media/logo.png" >
      <h2 class="titulo_header"> TP1 - Dorce Marzi Jose Anibal</h2>
    </header>

    <aside>

      <a href="index.php"><img class="home_image"src="media/home.png"></img></a>
      <h2 class="titulo_lateral">Acceso APIS</h2>
      <button  onclick="getTweets()">Tweets Covid19 MSN</button>
      <button  onclick="getVideos()">Videos Covid19 MSN</button>

    </aside>

    <section>
      <article id="id_articulo">
      </article>
    </section>

    <footer> <h1 class="footer_text">TygWEB 5/6/2020</h1></footer>

  </body>
</html>
