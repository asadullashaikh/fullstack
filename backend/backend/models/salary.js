var mongoose = require("mongoose");

var SalariesSchema = new mongoose.Schema({
	name: { type: String, required: true, max: 100 },
	salaries: { type: Number, required: true, max: 100 },
});

module.exports = mongoose.model("Salaries", SalariesSchema);
