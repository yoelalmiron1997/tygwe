const BEARER="AAAAAAAAAAAAAAAAAAAAANDHEgEAAAAAFzKwTH6KVu8jgaoFfOlFNiMLvQI%3DoKq7jBG1Og78CkUgnibWpWeLR5EwD46DloT9a1uP7eWwGIJi8X";

var keyWord=""

window.onload = function() {
    document.getElementById("iSearch").value = "";
}

function checkEnter(){
	if(event.keyCode == 13){
		buscarTweets();
	}
}

function appendTweets(tweets){
	var rm = document.getElementById("lTweets")
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
        list.id="lTweets";
		console.log("creando lista")
		
		for (let i=0; i<tweets.length; i++){
			var item = document.createElement('li');
			item.id="eTweet"
			var pp=document.createElement('img')
			pp.style.marginTop="10px"
			pp.src=tweets[i].user.profile_image_url
			console.log(tweets[i].user.profile_image_url)
			var n = document.createElement('p')
			n.innerHTML="@"+tweets[i].user.screen_name+":";
			n.id="nTweet"
			var d =document.createElement('p')
			d.innerHTML=tweets[i].created_at.substring(0, tweets[i].created_at.indexOf('+'));
			d.id="date"
			var t = document.createElement('p')
			t.id="tTweet"
			if(tweets[i].text.indexOf("https://t.co")!=-1){
				t.innerHTML="&emsp;"+tweets[i].text.substring(0, tweets[i].text.indexOf("https://t.co"))
			}else{
				t.innerHTML="&emsp;"+tweets[i].text;
			}
			item.appendChild(pp)
			item.appendChild(n)
			item.appendChild(d)
			item.appendChild(t)
			if(tweets[i].extended_entities){
				for (let j=0; j<tweets[i].extended_entities.media.length; j++){
					img=document.createElement('img');
					img.src=tweets[i].extended_entities.media[j].media_url
					item.appendChild(img)
				}
			}
			var link=document.createElement('a')
			link.href="https://twitter.com/user/status/"+tweets[i].id_str
			link.appendChild(item)

			list.appendChild(link)
		}
		document.getElementById("results").appendChild(list);


}
function buscarTweets(){
	keyWord=document.getElementById("iSearch").value;
	$.ajax({
		url:"https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q="+keyWord+
		"&result_type=mixed&count=10",
		method: "GET",
		headers:{
			'Content-Type':'application/json',
			'Authorization': 'Bearer ' + BEARER
		},
		success: function(response){
			console.log(response);
			appendTweets(response.statuses);
		},
		error: function(req, status, err){
			console.log(req, status, err);
		}

	})
}
