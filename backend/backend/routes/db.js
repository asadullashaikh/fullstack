var express = require("express");
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;

router.get("/hobbies", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				console.log("SUccessfully connected to julyexpress");
				console.log(db);

				db.collection("hobbies")
					.find()
					.toArray()
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						res.json(results);
					});
			}
			console.log("MongoDB is now connected to express");
		})
		.catch(function (error) {
			console.log("some error came:" + error);
		});
});

//add this line to top     var ObjectId = require("mongodb").ObjectID;

router.get("/hobbies/:id", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				console.log("SUccessfully connected to julyexpress");
				console.log(db);
				console.log(req.params.id);
				db.collection("hobbies")
					.find({ _id: ObjectId(req.params.id) })
					.toArray()
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						res.json(results);
					});
			}
			console.log("MongoDB is now connected to express");
		})
		.catch(function (error) {
			console.log("some error came:" + error);
		});
});

router.delete("/hobbies/:id", function (req, res) {
	console.log("came to delete");
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	let filter = { _id: ObjectId(req.params.id) };
	console.log(`delete id = ${req.params.id}`);
	//upsert means that if document is not found based per filter then create a new document otherwise update.
	//setting upsert = false will only update document if it is found.it wont insert a new document if document is not found as per
	//filter we provide
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				db.collection("hobbies")
					.deleteOne(filter)
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						let responseOb = { status: 1, msg: "delete operation successull" };
						res.json(responseOb);
					})
					.catch(function (err) {
						let errorOb = { status: -1, error: err };
						res.json(errorOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});

router.get("/hobbies/:searchString", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				console.log("SUccessfully connected to julyexpress");
				console.log(db);

				db.collection("hobbies")
					.find({ name: req.params.searchString })
					.toArray()
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						res.json(results);
					});
			}
			console.log("MongoDB is now connected to express");
		})
		.catch(function (error) {
			console.log("some error came:" + error);
		});
});
router.get("/inserthobbies/:name/:hobbies", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				db.collection("hobbies")
					.insertOne({ name: req.params.name, hobbies: req.params.hobbies })
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						let responseOb = { status: 1, msg: "Insert operation successull" };
						res.json(responseOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});

router.get("/insertmanyhobbies/:names/:hobbies", function (req, res) {
	let namesArray = req.params.names.split(",");
	console.log(namesArray);
	let insertArr = [];
	namesArray.forEach(function (val) {
		//it will create a object called hobbyOb with name as the array value and hobbies that are passed
		let hobbyOb = { name: val, hobbies: req.params.hobbies };
		insertArr.push(hobbyOb);
	});

	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				db.collection("hobbies")
					.insertMany(insertArr)
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						let responseOb = { status: 1, msg: "Insert operation successull" };
						res.json(responseOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});

router.get("/updatehobbies/:name/:hobbies", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	let filter = { name: req.params.name };
	let updatedDocument = { hobbies: req.params.hobbies };
	let options = { upsert: true };
	//upsert means that if document is not found based per filter then create a new document otherwise update.
	//setting upsert = false will only update document if it is found.it wont insert a new document if document is not found as per
	//filter we provide
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				console.log("inside connection success");
				db.collection("hobbies")
					.updateMany(filter, { $set: updatedDocument }, options)
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						let responseOb = { status: 1, msg: "Insert operation successull" };
						res.json(responseOb);
					})
					.catch(function (err) {
						let errorOb = { status: -1, error: err };
						res.json(errorOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});

router.delete("/hobbies/:name", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	let filter = { name: req.params.name };
	//upsert means that if document is not found based per filter then create a new document otherwise update.
	//setting upsert = false will only update document if it is found.it wont insert a new document if document is not found as per
	//filter we provide
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				db.collection("hobbies")
					.deleteOne(filter)
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						let responseOb = { status: 1, msg: "Insert operation successull" };
						res.json(responseOb);
					})
					.catch(function (err) {
						let errorOb = { status: -1, error: err };
						res.json(errorOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});

router.get("/deletehobbiesreturn/:name", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	let filter = { name: req.params.name };
	//upsert means that if document is not found based per filter then create a new document otherwise update.
	//setting upsert = false will only update document if it is found.it wont insert a new document if document is not found as per
	//filter we provide
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				db.collection("hobbies")
					.findOneAndDelete(filter)
					.then(function (result) {
						//this line will convert results array in json and send the response back to the user
						let responseOb = {
							status: 1,
							msg: "Insert operation successull",
							data: result,
						};
						res.json(responseOb);
					})
					.catch(function (err) {
						let errorOb = { status: -1, error: err };
						res.json(errorOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});
router.post("/insertmanyhobbies", function (req, res) {
	console.log(req.body);
	console.log("test");
	res.send(`name = ${req.body.name} and hobbies = ${req.body.hobbies}`);
});
/*create a route /addhobbies which loads a form where we can enter 2 values
name and hobbies. on the action value of form give "/hobbies" and 
method as POST. the moment you submit form, it will post the data using
post method to the /hobbies url
*/
router.post("/hobbies", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				db.collection("hobbies")
					.insertOne({ name: req.body.name, hobbies: req.body.hobbies })
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						let responseOb = { status: 1, msg: "Insert operation successull" };
						res.json(responseOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});

router.put("/hobbies/:id", function (req, res) {
	let db; //this variable will hold connection to the database of application which is julyexpress
	var connectionString = "mongodb://localhost:27017";
	let filter = { _id: ObjectId(req.params.id) };

	let updatedDocument = { hobbies: req.body.hobbies };
	let options = { upsert: false };
	//upsert means that if document is not found based per filter then create a new document otherwise update.
	//setting upsert = false will only update document if it is found.it wont insert a new document if document is not found as per
	//filter we provide
	mongoClient
		.connect(connectionString)
		.then(function (client) {
			db = client.db("julyexpress");
			if (db == false) {
				console.log("unable to connect to database");
			} else {
				console.log("inside connection success");
				db.collection("hobbies")
					.updateMany(filter, { $set: updatedDocument }, options)
					.then(function (results) {
						console.log(results);
						//this line will convert results array in json and send the response back to the user
						let responseOb = { status: 1, msg: "Insert operation successull" };
						res.json(responseOb);
					})
					.catch(function (err) {
						let errorOb = { status: -1, error: err };
						res.json(errorOb);
					});
			}
		})
		.catch(function (error) {
			let errorOb = { status: 0, error: error };
			res.json(errorOb);
		});
});

module.exports = router;
//url to test = http://localhost:3000/db/insertmanyhobbies/rachan,shrikankt/reading1,writing1
