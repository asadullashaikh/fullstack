const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    name: { type: String, required: true, maxlength: 20 },
    description: { type: String, required: true, maxlength: 200 },
});

module.exports = mongoose.model("Category", CategorySchema);

//schema is a set of rules.
