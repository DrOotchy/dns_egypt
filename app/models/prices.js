const mongoose = require("mongoose");

const pricesSchema = mongoose.Schema( {

    id : mongoose.Schema.Types.ObjectId,
    tldId : [{ type: Schema.Types.ObjectId, ref: 'TLD' }],
    providerId : [{ type: Schema.Types.ObjectId, ref: 'Providers' }],
    price : {
        type : Number,
        required : true,
    }
   
});

const Prices = module.exports = mongoose.model("Prices", pricesSchema);

// Get Prices
module.exports.getPrices = (callback, limit) => {
	Prices.find(callback).limit(limit);
}

// Get Prices
module.exports.getPricesById = (id, callback) => {
	Prices.findById(id, callback);
}

// Add Prices
module.exports.addPrices = (Prices, callback) => {
	Prices.create(Prices, callback);
}

// Update Prices
module.exports.updatePrices = (id, Prices, options, callback) => {
	var query = {_id: id};
	var update = {
        tldId: Prices.tldId,
        providerId: Prices.providerId,
        price: Prices.price
	}
	Prices.findOneAndUpdate(query, update, options, callback);
}

// Delete Prices
module.exports.removePrice = (id, callback) => {
	var query = {_id: id};
	Prices.remove(query, callback);
}