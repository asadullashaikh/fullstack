var Category = require("../models/category");
exports.createCategory = (req, res, next) => {
    let categoryObj = new Category({
        name: req.body.name,
        description: req.body.description,
    });
    categoryObj.save(function (err) {
        console.log(err);
        if (err) {
            res.json({ status: 0 });
        } else {
            res.json({ status: 1, data: "Category saved successfully" });
        }
    });
};
exports.findByName = (req, res, next) => {
    Category.find({ name: req.params.name }, function (err, data) {
        console.log(data);
        if (err) {
            res.json({ status: 0 });
        } else {
            res.json({ status: 1, data: data });
        }
    });
};
