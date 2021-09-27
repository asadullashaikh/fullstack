const hobbyModel = require("../models/registration");

exports.showRegistrations = function (req, res) {
	hobbyModel.find(function (err, hobbies_list) {
		console.log(hobbies_list);
		res.json(hobbies_list);
	});
};

exports.showRegistration = function (req, res) {
	hobbyModel.findById(req.params.id, function (err, hobby) {
		res.json(hobby);
	});
};

exports.createRegistration = function (req, res) {

	var hobbyOb = new hobbyModel({
		name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        city: req.body.city,
	});
	hobbyOb.save(function (err) {
		if (err) {
			console.log(err);
			res.json({ error: "cant save" });
		} else {
			console.log("success");
			res.json({ msg: "hobby saved" });
		}
	});
};

exports.deleteRegistration = function (req, res) {
	hobbyModel.findByIdAndDelete(req.params.id, function (err) {
		if (err) res.json(err.toString());
		res.json({
			status: 1,
			msg: "successfully delete author with id " + req.params.id,
		});
	});
};

exports.updateRegistration = function (req, res) {
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
