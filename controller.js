var app = require('./index');
var db = app.get('db');

module.exports = { 
	create: function(req, res){
		db.products.insert(req.body, function (err, response) {
			res.send(response);
		});
	},

	 getOne: function(req, res){
	 	console.log(req.query, req.params)
		db.products.find(Number(req.params.productid), function(err, response) {
			res.send(response);
		});
	},

	getAll: function(req, res){
		db.read_products(function(err, products){
			console.log(err, products)
			res.send(products)
		});

	},

	update: function(req, res){
		console.log(111111111, req.params, req.query)
		db.update_products([req.params.productID, req.body.description], function(err, response) {
			console.log(err, response)
			res.send("record updated")
		});
	},

	delete: function(req, res){
		db.delete_product(function(err,response){
			console.log(err, response)
			res.send(response)
		});
	}


}
	
