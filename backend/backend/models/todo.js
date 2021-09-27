var mongoose = require("mongoose");

var TodoSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, max: 100 },
        date: { type: Date, required: true},
        status: { type: Boolean, required: true,},
	},
	{
		versionKey: false, // You should be aware of the outcome after set to false
	}
);

module.exports = mongoose.model("Todo", TodoSchema);
