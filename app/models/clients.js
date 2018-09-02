const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        require: true,
        min: [2, 'At least 2 charecters required'],
        max: 25
    },
    lastName: {
        type: String,
        require: true,
        min: [2, 'At least 2 charecters required'],
        max: 25
    },
    password: {
        type: String,
        require: true,
        min: [6, 'At least 6 charecters required'],
        max: 25
    },
    email: {
        type: String,
        unique: true,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    create_date:{
		type: Date,
		default: Date.now
	}


});

const Clients = module.exports = mongoose.model("Clients", clientSchema);
//Get all
module.exports.getClients = (callback, limit) => {
    Clients.find(callback).limit(limit);
}
//Get one
module.exports.getClientById = (id, callback) => {
    Clients.findById(id, callback);
}
//Add
module.exports.addClient = (Clients, callback) => {
    Clients.create(Clients, callback);
}
// Update
module.exports.updateClient = (id, Clients, options, callback) => {
	var query = {_id: id};
	var update = {
		firstName: Clients.firstName,
		lastName: Clients.lastName,
		password: Clients.password,
		email: Clients.email,
		phone: Clients.phone,
	}
	Clients.findOneAndUpdate(query, update, options, callback);
}

// Delete
module.exports.removeClient = (id, callback) => {
	var query = {_id: id};
	Clients.remove(query, callback);
}