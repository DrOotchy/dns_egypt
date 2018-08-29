const express = require("express");
const app = express();
const mongo = require("mongoose");
const config = require('./config');

const port = process.env.PORT || 3663

mongoose.connect(config.database).catch(function (err) {
    console.log("failed !", err);
});
