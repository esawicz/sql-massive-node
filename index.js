var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var port = 8001;

var connectionString = "postgres://ellensawicz@localhost/sandbox";


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);
var db = app.get('db');

var controller = require('./controller');

app.post('/api/products', controller.create);

app.get('/api/product/:productid', controller.getOne);

app.get('/api/products', controller.getAll);

app.put('/api/product/:productID/desc', controller.update);

app.delete('/api/product/:productId', controller.delete)


app.listen(port, function(){
  console.log("Successfully listening on " + port)	
})