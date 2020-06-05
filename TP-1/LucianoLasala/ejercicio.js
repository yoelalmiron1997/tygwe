var app = new Vue({
	el:"#app",
	data: {
		message: 'hello world',
		showElements: false,
		showElementsTwo: false,
		elements: null,
		elementsTwo: [],				
		elementsTwoUrls: [],
		userName: null,			
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
		this.showPhrase = this.phrasesArray[Math.floor(Math.random() * 3)];
	},

	mounted() {																
		axios.get("https://api.unsplash.com/users/8moments/photos/?client_id=-qqFujEaGsaptFY6f3YY3bHiEFvLJ3PtWfSUi39NH6Q")
			.then(response => { 
								this.userName = response.data[0].user.username;
								for(var i = 8; i >= 0; i--) {
									this.elementsTwo.push(response.data[i].description);  
									this.elementsTwoUrls.push(response.data[i].urls.raw);
								}
							});

		axios.get("https://discord.com/api/guilds/708920234945282118/widget.json")
			.then(response => {
				this.elementsThree = response.data;
			})
	}
})