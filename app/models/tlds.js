const mongoose = require("mongoose");

const topLevelDomainSchema = mongoose.Schema( {

    id : mongoose.Schema.Types.ObjectId,
    name : { 
        type : String,
        required :  true,
            
    },
    providerId : [{ type: Schema.Types.ObjectId, ref: 'Providers' }]


});

const Tlds = module.exports = mongoose.model("TLDs", topLevelDomainSchema);

// Get Tlds
module.exports.getTlds = (callback, limit) => {
	Tlds.find(callback).limit(limit);
}

// Get Tlds
module.exports.getTldsById = (id, callback) => {
	Tlds.findById(id, callback);
}

// Add Tlds
module.exports.addTlds = (Tlds, callback) => {
	Tlds.create(Tlds, callback);
}

// Update Tlds
module.exports.updateTlds = (id, Tlds, options, callback) => {
	var query = {_id: id};
	var update = {
        name: Tlds.name,
        providerId: Tlds.providerId
	}
	Tlds.findOneAndUpdate(query, update, options, callback);
}

// Delete Tlds
module.exports.removeTlds = (id, callback) => {
	var query = {_id: id};
	Tlds.remove(query, callback);
}
