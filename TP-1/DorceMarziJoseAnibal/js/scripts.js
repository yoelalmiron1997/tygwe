var bearer = '';

function mostrar_tweet(text) {
    var h = document.createElement("p");
    var t = document.createTextNode(text);
    var b= document.createElement("br");
    h.innerHTML = text;
    document.getElementById("id_articulo").appendChild(h);
}

function getToken() {
  $.ajax({
     url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token',
     method: 'POST',
     headers: {
       'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
       'Authorization': 'Basic ' + btoa('4uEBnYuXIMGtGdHqDzFm0vv8c:nZW2m52SeBiqiYscugN7UkRdrMLHnAWfg9qIYDhgtuHPfXhPMi'),
     },
     data: {
       grant_type: 'client_credentials'
     },
     success: function(response){
       bearer = response.access_token;
     },
     error: function(req,status,err){
       console.log(req,status,err);
     }
  });
}

function getTweets (){
$("#id_articulo").empty();
  $.ajax({
     url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=msalnacion&count=8',
     method: 'GET',
     headers: {
       'Content-type': 'application/json',
       'Authorization': 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAABtXEwEAAAAAdoKW6GaTKEVc87zVlIBxaD%2FLn%2FA%3DIbdwlDRZz9X9gso8x7lAjxW97nDdtpsSa6pAgfOQ1Pzq9gnimK'
     },
     data: {
       grant_type: 'client_credentials'
     },
     success: function(response){
       var h1Tag = document.createElement('H1');
       h1Tag.innerHTML = "<h1 class='header_tweets'>Ministerio de Salud de la Nacion : Tweets Covid19</h1>";
       document.getElementById("id_articulo").appendChild(h1Tag);
       for(var i = 0; i< response.length; i++){
        mostrar_tweet(response[i].text);
         }
     },
     error: function(req,status,err){
       console.log(req,status,err);
     }
  });

}

function getVideos(){
  $("#id_articulo").empty();
  $('#id_articulo').append('<ul id="results"></ul>');
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part : 'snippet',
      channelId : 'UCwKSTg8zeCojMLBPA9bS7NQ',
      type : 'video',
      key: 'AIzaSyC-o4RjNE5HuZuE1bW0u3BDLpVT_suPna0',
      maxResults : '6'},
      function(data) {

     $.each( data.items, function( i, item ) {
        $('#results').append('<iframe width="350" height="200" src=https://www.youtube.com/embed/' + item.id.videoId + ' frameborder="0" allowfullscreen="allowfullscreen"></iframe>');
      })
     }
  );
};

function frasesaleatorias (){
  $("#id_articulo").empty();
  frases = new Array()
  frases[0] = "El mundo que hemos creado es un proceso de nuestro pensamiento. No se puede cambiar sin cambiar nuestra forma de pensar."
  frases[1] = "Debo estar dispuesto a renunciar a lo que soy con el fin de convertirse en lo que seré."
  frases[2] = "El amor es mejor maestro que el deber."
  aleatorio = Math.random() * (frases.length)
  aleatorio = Math.floor(aleatorio)
  $('#id_articulo').append('<h1 class="frases">' + frases[aleatorio] + '</h1>');
  $('#id_articulo').append('<video width="320" height="240" controls><source src="media/video_presentacion.mov" type="video/mp4"></video>');
};
