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

module.exports = mongoose.model("Providers", serviceProvidersSchema);