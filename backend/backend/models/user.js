var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, max: 100 },
		email: { type: String, required: true, max: 100 },
	}
);

module.exports = mongoose.model("User", UserSchema);
