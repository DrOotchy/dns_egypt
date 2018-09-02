const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require('./config');
const bodyParser = require("body-parser");

Client = require('./app/models/clients');
Providers = require('./app/models/providers');
Domains = require('./app/models/domains');
Tlds = require('./app/models/tlds');
Prices = require('./app/models/prices');

app.use(bodyParser.json());

mongoose.connect(config.database).catch(function (err) {
    console.log("failed !", err);
});

app.get('/', (req, res) => {
	res.send('Welcome TO EGY.PT DNS Server');
});

app.get('/clients', (req, res) => {
    Client.getClients((err, Client)=>{
        if(err){
            throw err;
        }
        res.json(Client)
    })
})
app.get('/clients/:_id', (req,res) =>{
    Client.getClientsById(req.params._id,(err, Client)=>{
        if(err){
            throw err;
        }
        res.json(Client)
    })
})

app.get('/providers', (req, res) => {
    Providers.getProviders((err, Providers)=>{
        if(err){
            throw err;
        }
        res.json(Providers)
    })
})
app.get('/providers/:_id', (req,res) =>{
    Providers.getProvidersById(req.params._id,(err, Providers)=>{
        if(err){
            throw err;
        }
        res.json(Providers)
    })
})


app.listen(3000);
console.log('Running on port 3000...');