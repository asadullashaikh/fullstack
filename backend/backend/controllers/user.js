const hobbyModel = require("../models/user");

exports.showHobbies = function (req, res) {
	hobbyModel.find(function (err, hobbies_list) {
		console.log(hobbies_list);
		res.json(hobbies_list);
	});
};


exports.createHobby = function (req, res) {
	

	const name = req.body.user
    const email = req.body.f
    var hobbyOb = new hobbyModel({
		name: name,
		email: email,
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

exports.updateHobby = function (req, res) {
	const filter = {_id:req.params.id  };
	let updateOb = req.body;
	console.log(updateOb);
	hobbyModel.findOneAndUpdate(filter, {
		name: "user",
	  }, function (err) {
		if (err) res.json(err.toString());
		res.json({
			status: 1,
			msg: "successfully edited author with id " + req.params.id,
		});
	});
};
/*
exports.updateHobby = function (req, res) {
	let updateOb = req.body;
	console.log(updateOb);
	try {hobbyModel.findById(req.body.id, (u)=> {
		u.name = req.body.name
		u.email = req.body.email
		u.save();
	});} catch (err){
		console.log(err);
	}
};
*/

exports.deleteHobby = function (req, res) {
	hobbyModel.findByIdAndDelete(req.params.id, function (err) {
		if (err) res.json(err.toString());
		res.json({
			status: 1,
			msg: "successfully delete author with id " + req.params.id,
		});
	});
};