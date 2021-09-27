var mongoose = require("mongoose");

var RegistrationSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, max: 100 },
        email: { type: String, required: true, max: 100 },
        password: { type: String, required: true, max: 100 },
        gender: { type: String, required: true, max: 100 },
        city: { type: String, required: true, max: 100 },
	},
	{
		versionKey: false, // You should be aware of the outcome after set to false
	}
);

module.exports = mongoose.model("Registration", RegistrationSchema);
