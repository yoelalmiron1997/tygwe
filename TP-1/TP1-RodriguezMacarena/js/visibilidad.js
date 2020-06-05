
jQuery(document).ready(function(){ 
  $(".oculto").hide();
  $("#frase").show();              
    $(".inf").click(function(){
          var nodo = $(this).attr("href");  
          if ($(nodo).is(":visible") ){
          	$(nodo).hide();
            return false; 
          }
          else{
        	$(".oculto").hide("slow");  
        	$("#frase").hide("slow");                          
        	$(nodo).fadeToggle("fast");
        	return false;
          }
    });
}); 



