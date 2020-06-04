const app = new Vue({
    el: '#app',
    mounted: function(){
        this.getFrase() 
    },
    data: {        
        frase: ''
    },
 
    methods: { 
        getFrase(){                      
            var frases = '{ "frases" : [' +
            '{ "autor":"John Lenon" , "texto":"La vida es aquello que va pasando mientras hacemos planes para el futuro." },' +
            '{ "autor":"Bill Gates" , "texto":"Si miramos al siguiente siglo, los líderes serán los que empoderan a otros." },' +
            '{ "autor":"Bill Gates" , "texto":"Habrá dos tipos de negocios en el siglo XXI: aquellos que estén en el Internet y aquellos que ya no existan." },' +
            '{ "autor":"CFK" , "texto":"La Patria es el otro." },' +
            '{ "autor":"Albert Einstein" , "texto":"Cada día sabemos más y entendemos menos." },' +
            '{ "autor":"Stephen Hawking" , "texto":"Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle" }  ]}';
            var obj = JSON.parse(frases);            
            this.frase = obj.frases[Math.floor(Math.random() * obj.frases.length)];
        }
    }

})




