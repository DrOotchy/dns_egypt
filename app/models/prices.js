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

module.exports = mongoose.model("Prices", pricesSchema);