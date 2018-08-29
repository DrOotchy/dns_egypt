const mongoose = require("mongoose");

const topLevelDomainSchema = mongoose.Schema( {

    id : mongoose.Schema.Types.ObjectId,
    name : { 
        type : String,
        required :  true,
            
    },
    providerId : [{ type: Schema.Types.ObjectId, ref: 'Providers' }]


});

module.exports = mongoose.model("TLDs", topLevelDomainSchema);