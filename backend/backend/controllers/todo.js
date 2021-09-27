const hobbyModel = require("../models/todo");

exports.showTodos = function (req, res) {
	hobbyModel.find(function (err, hobbies_list) {
		console.log(hobbies_list);
		res.json(hobbies_list);
	});
};

exports.showTodo = function (req, res) {
	hobbyModel.findById(req.params.id, function (err, hobby) {
		res.json(hobby);
	});
};

exports.createTodo = function (req, res) {

	var hobbyOb = new hobbyModel({
		name: req.body.name,
        date: req.body.date,
        status: req.body.status,
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

exports.deleteTodo = function (req, res) {
	hobbyModel.findByIdAndDelete(req.params.id, function (err) {
		if (err) res.json(err.toString());
		res.json({
			status: 1,
			msg: "successfully delete author with id " + req.params.id,
		});
	});
};

exports.updateTodo = function (req, res) {
	let updateOb = req.body;
	hobbyModel.findOneAndUpdate(req.params.id, updateOb, function (err) {
		if (err) res.json(err.toString());
		res.json({
			status: 1,
			msg: "successfully edited author with id " + req.params.id,
		});
	});
};
