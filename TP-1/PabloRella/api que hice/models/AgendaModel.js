var mongoose = require("mongoose");

// Definimos la estructura de los datos a guardar en agenda
var AgendaSchema = mongoose.Schema({
		nombre: String,
		apellido: String,
		telefono: Number,
		email: String,
		ciudad: String,
		provincia: String,
		pais: String
	  });

// Creamos un model (es la representacion del agenda en nuestro sistema)
var AgendaModel = mongoose.model('agenda', AgendaSchema);

module.exports = AgendaModel;