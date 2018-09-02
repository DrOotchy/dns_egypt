const mongoose = require("mongoose");

const domainNameSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,
    clientsId: [{ type: Schema.Types.ObjectId, ref: 'Clients' }],
    name: {
        type: String,
        required: true,

    },
    tldId: [{ type: Schema.Types.ObjectId, ref: 'TLD' }]


});

const Domains = module.exports = mongoose.model("Domains", domainNameSchema);

//Get All
module.exports.getDomains = (callback, limit) => {
    Domains.find(callback).limit(limit);
}

//Get one
module.exports.getDomainsById = (id, callback) => {
    Domains.findById(id, callback);
}
//Add New
module.exports.addDomain = (Domains, callback) => {
    Domains.create(Domains, callback);
}
// Update
module.exports.updateDomains = (id, Domains, Options, callback) => {
    var query = {_id: id};
    var update = {
        clientsId: Domains.clientsId,
        name: Domains.name,
        tldId: Domains.tldId
    }
    Domains.findOneAndUpdate(query, update, Options, callback);
}

// Delete one
module.exports.removeDomains = (id, callback) => {
    var query = {_id: id};
    Domains.remove(query, callback);
}