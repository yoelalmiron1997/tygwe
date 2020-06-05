var access_token = "";

$(document).ready(function(){

    
    var urlParamsString = window.location.search;
    if(urlParamsString.length > 0){
        const urlParams = new URLSearchParams(urlParamsString);

        if(urlParams.has('access_token')){
            access_token = urlParams.get('access_token');
        }

        if(urlParams.has('access_denied')){
            document.cookie = "showFBContentAfterLogin=false; expires=Thu, 18 Dec 1970 12:00:00 UTC; path=/";
            alert("Has cancelado el inicio de sesión en facebook o algo no salió bien.");
        }
    }


    var cookieContent = document.cookie;
    document.cookie = "showFBContentAfterLogin=false; expires=Thu, 18 Dec 1970 12:00:00 UTC; path=/";;

    if(cookieContent.includes("showFBContentAfterLogin=true"))
    {
        FacebookContent();
    }else{

        LoadPhrase();
    }

    $("#btnAPI1").click( function() { Trivia(); });

    $("#btnAPI2").click(function() { FacebookContent(); });
    
 
    
})

function LoadPhrase(){
    var phrases = [
        {
            phrase: "Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida.<br><br>... Lao Tsé", phraseClass: "rndPhrase phrase1"
        },
        {
            phrase: "Una velada en que todos los presentes estén absolutamente de acuerdo es una velada perdida.<br><br>... Albert Einstein", phraseClass: "rndPhrase phrase2"
        },
        {
            phrase: "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.<br><br>... William George Ward", phraseClass: "rndPhrase phrase3"
        }
    ];
    
    var rndNum = randomize(0,2); 
    $("#phrase").html(phrases[rndNum].phrase);
    $("#phrase").toggleClass(phrases[rndNum].phraseClass);
}



function Trivia(){
    $("#content").empty();
    $("#content").append('<div class="question">Cargando pregunta espere por favor ......</div>');
    
    $.ajax({
        type: "GET",
        url: "https://opentdb.com/api.php?amount=1&category=18&type=multiple",
        
        success: function (response) {
            BuildTrivia(response.results[0].question, response.results[0].correct_answer, response.results[0].incorrect_answers);
        },

        error: function (response) {
            $("#content").html('<div class="question">Error cargando trivia</div>');
        }
    });
}

function BuildTrivia (question, correct_answer, other_answers) {  
    $("#content").empty();        
    $("#content").append('<div class="question">' + question + '</div>');
    var answers = other_answers; 
    answers.push(correct_answer);
    answers.sort();
    
    var answer = "";
    var optId = 0;
    var correct_answer_id = 0;
    answers.forEach(element => {
        $("#content").append('<div class="answerDiv"><label><input type="radio" name="answer" value="' + optId + '">' + element + '</label></div>');
        if(element == correct_answer){
            correct_answer_id = optId;
        }
        optId ++;

    });
    
    $("#content").append('<div class="btnDiv"><button class="btns" id="btnEval" type="button">Evaluar</button> <button class="btns" id="btnNext" type="button">Siguiente Pregunta</button></div>');
    $("#btnEval").click( function() { EvalAnswer(correct_answer_id) });
    $("#btnNext").click( function() { Trivia() } );

}

function EvalAnswer(correct_answer){
    
    $('input[name="answer"]').each(function(){
        var optVal = $(this).val();
        var isChecked = $(this).is(':checked');
        
        if(optVal == correct_answer){
            $(this).parent().toggleClass("answerDiv right");
        }

        if(isChecked && optVal != correct_answer)
        {
            $(this).parent().toggleClass("answerDiv wrong");
        }   
    }
    );    
}

function randomize(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FacebookContent() {  
    $("#content").html('<div class="question">Obteniendo datos del usuario ... por favor espere</div>');
    if(access_token == ""){
        document.cookie = "showFBContentAfterLogin=true; expires=Thu, 18 Dec 2060 12:00:00 UTC; path=/";;
        FacebookLogin();
        return;
    }

    var name = "";
    var imageUrl = "";
    $.ajax({
        type: "GET",
        url: "https://graph.facebook.com/v7.0/me?access_token=" + access_token,
        async: false,
        success: function (response) {
            name = '¡Bienvenido ' + response.name + '!';
        },

        error: function () {
            name = "Ha ocurrido un error";
        }
    });

    $.ajax({
        type: "GET",
        url: "https://graph.facebook.com/v7.0/me/picture?access_token="+ access_token +"&redirect=0&height=500&width=500&type=normal",
        async: false,
        success: function (response) {
            imageUrl = response.data.url;
        },

        error: function () {
            imageUrl = "images/no_image.png";
        }
    });
    
    $("#content").html('<div class="userDiv">' + name + '</div><br><div class="userDiv"><img class="userImage" width="300" height="300" src="' + imageUrl + '"></div>');
    
}

function FacebookLogin(){
    var fb_url = "";
    $.ajax({
        type: "GET",
        url: "fbsession.php",
        async: false,

        success: function (response) {
            fb_url = response.fb_dialog_link;
        },

        error: function () {
            alert("Error iniciando sesion");
        }

    });


    if(fb_url.length > 0){
        window.location.href = fb_url;
    }
}

