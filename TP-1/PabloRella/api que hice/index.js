var express = require('express');
var app = express();
var mongoose = require('mongoose');
var axios =require('axios');
var AgendaModel = require("./models/AgendaModel");
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



// Conexion con la base de datos MongoDB
mongoose.connect('mongodb+srv://pavlinrella:30649007pa@cluster0-2enog.mongodb.net/test', {}).then( () => {
    // Conexion exitosa
    console.log('Conexion exitosa con MongoDB');
}).catch( (err) => {
    console.log('No me pude conectar con MongoDB');
    console.log(err);
})



/* var myLogger = function(req, res, next) { // Esta funcion se va a ejecutar en cada peticion
    console.log('Paso por el logger');
    next();
} */

var myErrorHandler = function(error, req, res, next) {
    console.log('Paso por el manejador de errores');
    console.log(error.message); // Mensaje de error
    res.status(error.status || 500); // Retornamos el estado del error o 500 si no tiene estado
    res.send(error.message);
}

//app.use(myLogger);

app.get('/', function (request, response) {
    response.send('Bienvenido al examen Final de NodeJS nivel Intermedio!');
});

//app.get('/prueba', function(req, res, next) {
    // Vamos a generar un error
//    next(new Error('Este error es de prueba y forzado'));
    //res.send('Respuesta de /prueba');
//});

app.get("/contactos", async (request, response) => {
    //Retorna el listado de contactos registrados en el sistema
    try {
        var result = await AgendaModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
        console.log(error);
        
    }
});

app.post('/contactos', function(req, res) {
    //Registra un nuevo contacto en el sistema
	 console.log("ENTRO");
	 console.log(req.body);
	 console.log(JSON.stringify(req.body));
    var instancia = new AgendaModel({

        "nombre":req.body.nombre,
		"apellido":req.body.apellido,
		"telefono":req.body.telefono,
		"email":req.body.email,
		"ciudad":req.body.ciudad,
		"provincia":req.body.provincia,
		"pais":req.body.pais



});
    instancia.save( (err, contacto) => {
        if (err) {
            // No se pudo guardar el contacto
            console.log('No se pudo guardar el contacto');
            res.send('No se pudo guardar el contacto');
            return;
        }
       
        res.send('contacto guardado');
    });
});

app.get("/contacto/:id", async (request, response) => {
    try {
        var contact = await AgendaModel.findById(request.params.id).exec(); ///informacion de la base de datos
        var url = "https://api.openweathermap.org/data/2.5/weather?q=";
        axios.get(url + contact.ciudad + '&appid=fdba7d8bf5cfa0b1ad7b87dd296f1090')
        .then((res) => {
          var temp = parseFloat(res.data.main.temp - 273.15).toFixed(2) ///obtengo la temperatura y la 
          
          contact.temperatura = temp 
          const tmpContact = contact.toObject();
        tmpContact.temperatura = temp 
        response.json(tmpContact);
          response.json(contact);
        })
        .catch((err) => {
          console.log('err');
        });
       
      } catch (error) {
        response.status(500).send(error);
        console.log(error);
        
    }
});

app.put("/contacto/:id", async (request, response) => {
    //Actualiza los datos registrados de un contacto

    try {
        var superherore = await AgendaModel.findById(request.params.id).exec();
        superherore.set(request.body);
        var result = await superherore.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/contacto/:id", async (request, response) => {
    //Borra los datos registrados de un contacto


    try {
        var result = await AgendaModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.use(myErrorHandler);

//settings
app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'), function () {
    console.log('Iniciando la aplicación en http://localhost:3000 <- copia esta URL en tu navegador');
});
