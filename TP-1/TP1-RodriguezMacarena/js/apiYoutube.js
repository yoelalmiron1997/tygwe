

//Buscador de videos en youtube 

$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        type: 'video',
        part: 'snippet',
        key: 'AIzaSyDhftirNmjkpU3plSUG366Mbea2ua6nxmk',
        q: searchTerm
    };
  
    $.getJSON(url, params, showResults);
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    const videoList = document.getElementById('videoListContainer');

    console.log(results)
    
    $.each(entries, function (index, value) {
        if (entries) {
            let output = '<br><h2>Resultados de la busqueda...</h2><br><ul>';
             
            entries.forEach(items => {
                var title = items.snippet.title;
                var description = items.snippet.description;
                const videoId = items.id.videoId;
                output += `
                    <li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><h4>${title}</h4><h4>${description}</h4></li>
                `;
            });
            output += '</ul>';
            videoList.innerHTML = output;
          }
          
        
    }); 
    
   
}
