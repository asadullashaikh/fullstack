var mongoose = require("mongoose");

var HobbiesSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, max: 100 },
		hobbies: { type: [String], required: true, max: 100 },
	},
	{
		versionKey: false, // You should be aware of the outcome after set to false
	}
);

module.exports = mongoose.model("Hobbies", HobbiesSchema);
