const Author = require("../models/author");
var { body, validationResult } = require("express-validator");
var { sanitizeBody } = require("express-validator");
exports.showAuthors = function (req, res) {
	Author.find(function (err, authors_list) {
		console.log(authors_list);
		res.json(authors_list);
	});
};
exports.showAuthor = function (req, res) {
	Author.findById(req.params.id, function (err, author) {
		let responseOb = {};
		responseOb = { first_name: author.first_name };
		console.log(responseOb);
		res.json(responseOb);
	});
};
exports.createAuthor = [
	body("first_name")
		.isAlphanumeric()
		.escape()
		.withMessage("First Name should be alphanumeric"),
	body("last_name")
		.isLength({ min: 1 })
		.trim()
		.withMessage("last name needed")
		.isAlphanumeric()
		.withMessage("last name should be alpha numeric"),
	body("dob").isISO8601().withMessage("Data format for DOB improper"),
	function (req, res) {
		console.log("the function ran");
		var authorOb = new Author({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			dob: req.body.dob,
			dod: req.body.dod,
		});
		authorOb.save(function (err) {
			if (err) {
				console.log(err);
				//res.json({ error: err._message });
				res.json({ error: err.toString() });
			} else {
				console.log("success");
				res.json({ msg: "author saved" });
			}
		});
	},
];
/*
exports.createAuthor = function (req, res) {
	var authorOb = new Author({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		dob: req.body.dob,
		dod: req.body.dod,
	});
	authorOb.save(function (err) {
		if (err) {
			console.log(err);
			res.json({ error: "cant save" });
		} else {
			console.log("success");
			res.json({ msg: "author saved" });
		}
	});
};*/
/*
exports.deleteHobby = function (req, res) {
	hobbyModel.findByIdAndDelete(req.params.id, function (err) {
		if (err) res.json(err.toString());
		res.json({
			status: 1,
			msg: "successfully delete author with id " + req.params.id,
		});
	});
};

exports.updateHobby = function (req, res) {
	let updateOb = req.body;
	console.log(updateOb);
	hobbyModel.findOneAndUpdate(req.params.id, updateOb, function (err) {
		if (err) res.json(err.toString());
		res.json({
			status: 1,
			msg: "successfully edited author with id " + req.params.id,
		});
	});
};
*/
