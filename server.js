const express = require("express");
const app = express();
const mongo = require("mongoose");
const config = require('./config');

const port = process.env.PORT || 3663


app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

mongoose.connect(config.database).catch(function (err) {
    console.log("failed !", err);
});

app.get('/', (req, res) => {
	res.send('Welcome TO EGY.PT DNS Server');
});


app.listen(3000);
console.log('Running on port 3000...');