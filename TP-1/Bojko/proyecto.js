

var Frases=new Array;

Frases[0]= "A caballo regalado no se le miran los dientes"
Frases[1]="Dime con quien andas y te dire quien eres"
Frases[2]="Mas vale parajaro en mano que 100 volando"

var Fstyle= new Array;
Fstyle[0]="2px 2px 2px #CE5937"
Fstyle[1]="-4px 6px 3px #3F4F81"
Fstyle[2]="-2px 1px 0px #DFC47E"

var Q=Frases.length;
var NA=Math.round(Math.random()*(Q-1));

function Escribir() {
 
 const f = document.getElementById('Frase'); 
 f.innerHTML = Frases[NA] ;
 f.style.textShadow = Fstyle[NA];
 //console.log (f);

}

function trending(){

  $.ajax({
     type: "GET",
     url: "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=23424747",
     headers: {
       'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKmBEgEAAAAAuFyD6%2FW%2BlBm6LsOtmioG10a0%2Bj0%3Dkg8kcEN3NMjmmPpXYVfGBl28chzpkc5V7j27pzmbqXE3TIHf50'},  
      dataType: "json",
       success: function (response) {
           trendingTopic(response[0]);
        //  console.log(response[0].trends[0].name)
            
        },
        error: function(req,status,err){
          console.log(req,status,err)
        }
        
        
    });
  }


  function cantidadCOV19() {
    $.ajax({
      type: "GET",
      url:"https://api.covid19api.com/country/argentina/status/confirmed",
      dataType:"json",
      success: function (response) {
         // console.log(response)
          infectados(response)
        
      }


    })
    
  }

  function infectados(covi){
   var a= covi.length;
    NumeroC ="Casos registrados hasta el dia de la fecha : " + '<strong>'+ (covi[a-1].Cases)+'</strong>' + " en la Argentina" ;
    
   $("#covid19").html(NumeroC)
  }

function trendingTopic(currencies) {
  var html = '<ul>';
  html += '<li>' + '<strong>'+ "Trending topic:" +'</strong>'+ '</li>';
  for (var i = 0; i < 3; i++) {
    
   
   html += '<li>' + currencies.trends[i].name + '</li>';
 }
 
  
   // console.log(currency)
  
 
  html += '</ul>';
  console.log(html)
  $("#Trends").html(html)
}


