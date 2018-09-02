const mongoose = require("mongoose");

const serviceProvidersSchema = mongoose.Schema( {

    id : mongoose.Schema.Types.ObjectId,
    name : { 
        type : String,
        required :  true,
            
    },
    url : {
        type: String,
        reuired: true,
    },
   
});

const Providers = module.exports = mongoose.model("Providers", serviceProvidersSchema);

// Get Providers
module.exports.getProviders = (callback, limit) => {
	Providers.find(callback).limit(limit);
}

// Get Providers
module.exports.getProvidersById = (id, callback) => {
	Providers.findById(id, callback);
}

// Add Providers
module.exports.addProviders = (Providers, callback) => {
	Providers.create(Providers, callback);
}

// Update Providers
module.exports.updateProviders = (id, Providers, options, callback) => {
	var query = {_id: id};
	var update = {
        name: Providers.name,
        url: Providers.url
	}
	Providers.findOneAndUpdate(query, update, options, callback);
}

// Delete Providers
module.exports.removeProviders = (id, callback) => {
	var query = {_id: id};
	Providers.remove(query, callback);
}
