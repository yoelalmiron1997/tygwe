var app = new Vue({
	el:"#app",
	data: {
		message: 'hello world',
		showElements: false,
		showElementsTwo: false,
		elements: null,
		elementsTwo: [],				// aca guardo las descripciones
		elementsTwoUrls: [],			// aca guardo las urls de las fotos
		phrasesArray:[{phrase:'Hola a todos :D', style:1}, {phrase:'Pagina unica en el mundo', style:2} ,{phrase:'Esto es muy divertido!!', style:3}],
		elementsThree: null,
	},

	methods: {

		api1() {
			this.showElementsTwo = false;
			this.showElements = true;
		},

		api2() {
			this.showElements = false;
			this.showElementsTwo = true;
		}

	},

	created() {
		this.showPhrase = this.phrasesArray[Math.floor(Math.random() * 3)]; // toma valores entre 0 y 1(exclusivo), luego multiplica por 3 y luego toma la parte entera 
	},

	mounted() {																
		axios.get("https://api.unsplash.com/users/randomsky/photos/?client_id=-qqFujEaGsaptFY6f3YY3bHiEFvLJ3PtWfSUi39NH6Q") // This page is called unsplash, it's used to upload photos, is very similiar to instagram.
			.then(response => { 
								for(var i = 3; i >= 0; i--) {								// aca solo quiero 4 imagenes y sus descripciones
									this.elementsTwo.push(response.data[i].description);  
									this.elementsTwoUrls.push(response.data[i].urls.raw);
								}
							});

		axios.get("https://discordapp.com/api/guilds/140805434654195712/embed.json")
			.then(response => {
				console.log(response.data);
			})

		axios.get("https://discord.com/api/guilds/708920234945282118/widget.json") // muestra un json de mi guild
			.then(response => {
				this.elementsThree = response.data;
				console.log(response.data);
			})
	}
})