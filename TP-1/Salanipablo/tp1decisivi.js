$("#clima").click(function () {
    
    $(".mostrar").empty()
    var clima = function (data) {
        $(".mostrar").append("<h1> Las condiciones climaticas de Buenos aires son:</h1>")
        $(".mostrar").append("<ul><li>Temperatura Actual = " + (data.main.temp - 273.15).toFixed(2) + " °</li><li> Temperatura Maxima = " + (data.main.temp_max - 273.15).toFixed(2) + "°</li><li> Temperatura Minima = " + (data.main.temp_min - 273.15).toFixed(2) + " °</li><li>Sensacion termica  = " + (data.main.feels_like - 273.15).toFixed(2)+"°</li><li>Condiciones Climaticas= " + (data.weather[0].description)+ "</li></ul>")
    }


    $.get('http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916').success(clima)


})
function ejecutarAJAX(q){
    $.get("https://www.googleapis.com/youtube/v3/search",
    {part:"snippet, id", q :q, pageToken:" ",type:"video",key:"AIzaSyCCAcxQPK08jZEyyTog9ufdKv1IOO3g9Gg"}
    ,function(data){
        $(".mostrar").empty()
        $(".mostrar").append("<h1> Resultados de busqueda :</h1>")
        var img
        var url
        
        for (let i =0 ; i<4; i++){
            img = data.items[i].snippet.thumbnails.default.url;
            url = "https://www.youtube.com/watch?v="+data.items[i].id.videoId
            $(".mostrar").append("<ul><li> Nombre de video: " + data.items[i].snippet.title + " <br> Nombre del Canal: "+ data.items[i].snippet.channelTitle+"<br> Imagen : <img src = "+img+"> <br>  <a href="+url+">Ir al video</a></li> <hr>") 

        }

    });
}
$("#youtube").click(function(){
    
    var q = $("#input").val();
    
    ejecutarAJAX(q);
})
