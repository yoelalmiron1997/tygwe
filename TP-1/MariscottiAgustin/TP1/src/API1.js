let arr;

let str;

window.onload = function() {
    document.getElementById("iAnime").value = "";
}

function checkEnter(){
	if(event.keyCode == 13){
		ALApi();
	}
}

function ALApi(){
    str=document.getElementById("iAnime").value;
    query = 
    `query($search: String){
        Page{
            media(search: $search, type: ANIME){
                title{
                    romaji
                    english
                    native
                }
                description
                coverImage{
                    large
                }
                episodes
                averageScore
                genres
                source
                bannerImage
            }
        }
    }`;

    variables={search:str};

    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };


    fetch (url, options)
        .then(response => response.json())
        .then(json => {console.log(json.data.Page.media);
            return json.data.Page.media;})
        .then(data =>{
            arr=[];
            filtrarAnime(data);

            //Agregar resultados y actualizar el DOM
            document.getElementById('results').appendChild(makeUL(arr));
            console.log("finish");
        })
        .catch(e=>console.log(e));

    console.log("prueba");

    function filtrarAnime(data){
        //Filtrado evaluando el contenido del resultado y el input

        for (let i=0; i< data.length; i++){
            if (data[i].title.english!=null && data[i].title.english.toUpperCase().includes(variables.search.toUpperCase())){
                arr.push(data[i]);
            } else if (data[i].title.romaji!=null && data[i].title.romaji.toUpperCase().includes(variables.search.toUpperCase())){
                arr.push(data[i]);
            }
        }
    }

    function makeUL(array) {
        //delete content of previous search:
        var rm = document.getElementById("lAnime")
        if (rm != null){
            while (rm.childNodes.length > 0){
                console.log("Removiendo")
                rm.removeChild(rm.childNodes[0]);
            }
            rm.remove();
        }else{
            console.log("No hay lista")
        }
        // Create the list element:
        var list = document.createElement('ul');
        list.id="lAnime";
        for (var i = 0; i < array.length; i++) {
            var item = document.createElement('li');
            var nameA = document.createElement("p");
            nameA.innerText=array[i].title.english || array[i].title.romaji
            nameA.setAttribute("class", "name")

            var img=document.createElement('img');
            img.src=array[i].coverImage.large
            img.style.display="none";
            img.id="cover"

            var listInfo=document.createElement('ul')
            listInfo.style.display="none"
            listInfo.className="info"

            var source=document.createElement('li');
            source.innerHTML="Source: " + array[i].source;

            var episodes=document.createElement('li')
            episodes.innerHTML="Episodes: " + array[i].episodes;

            var genres=document.createElement('ul');
            genres.innerHTML="Genres: "
            genres.className="genres"
            for (j=0; j<array[i].genres.length; j++){

                var genre=document.createElement('li')
                genre.innerHTML=array[i].genres[j];
                genres.appendChild(genre);
            }


            var score=document.createElement('li');
            if (array[i].averageScore != null){
                score.innerHTML="Score: " + array[i].averageScore + "/100";
            }else score.innerHTML="Score: Not available score yet"

            var banner=document.createElement('img');
            banner.src=array[i].bannerImage
            banner.style.display="none"
            banner.id="banner"


            listInfo.appendChild(source)
            listInfo.appendChild(document.createElement('br'))
            listInfo.appendChild(episodes)
            listInfo.appendChild(document.createElement('br'))
            listInfo.appendChild(genres);
            listInfo.appendChild(document.createElement('br'))
            listInfo.appendChild(score);

            var des=document.createElement('p');
            des.innerHTML=array[i].description;
            des.id="description"
            des.style.display="none";

            nameA.addEventListener("click", function(){
                if (this.parentElement.children[2].style.display=="none"){
                    for (let j=2; j<5; j++){
                        this.parentElement.children[j].style.display="inline"
                        this.parentElement.children[j].style.animation="fadein 1.5s"
                    }
                    this.parentElement.children[5].style.display="block"
                    ;
                }else{
                    for (let j=2; j<6; j++){
                        this.parentElement.children[j].style.display="none"
                    }
                }

            });

            // Set its contents:
            item.appendChild(nameA);
            item.appendChild(document.createElement('br'))
            item.appendChild(img);
            item.appendChild(listInfo);
            item.appendChild(banner);
            item.appendChild(des);
 
            // Add it to the list:
            list.appendChild(item);
        }
        // Return the constructed list:
        return list;
    }
}

function setButtonPressed(){
    ALApi();
}

