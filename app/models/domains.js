const mongoose = require("mongoose");

const domainNameSchema = mongoose.Schema( {

    id : mongoose.Schema.Types.ObjectId,
    clientsId : [{ type: Schema.Types.ObjectId, ref: 'Clients' }],
    name : { 
        type : String,
        required :  true,
            
    },
    tldId : [{ type: Schema.Types.ObjectId, ref: 'TLD' }]


});

module.exports = mongoose.model("Domains", domainNameSchema);