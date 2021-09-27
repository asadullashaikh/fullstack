var Book = require("../models/book");
exports.createBook = function (req, res, next) {
	if (!req.body.category instanceof Array) {
		if (typeof req.body.category === undefined) {
			req.body.category = [];
		} else {
			req.body.category = new Array(req.body.category);
		}
	}
	var bookOb = new Book({
		title: req.body.title,
		summary: req.body.summary,
		isbn: req.body.isbn,
		author: req.body.author,
		category: req.body.category,
	});
	bookOb.save(function (err) {
		if (err) {
			res.json({ status: 0, debug_data: err });
		} else {
			res.json({ status: 1, data: "Book saved Successfully" });
		}
	});
};
exports.getBooks = function (req, res, next) {
	Book.find(function (err, data) {
		if (err) {
			res.json({ status: 0, debug_data: err });
		} else {
			res.json({ status: 1, data: data });
		}
	});
};

//this gets author details also which is a foreign key
exports.getBookDetailsAuthor = function (req, res, next) {
	Book.find()
		.populate("author")
		.exec(function (err, list_books) {
			//if err is true, then pass control to next handler.
			if (err) {
				return next(err);
			}
			//its successful so send data back to the browser/app
			res.json({ status: 1, data: list_books });
		});
};
//this gets author details and category  which are foreign keys

exports.getBookDetailsAll = function (req, res, next) {
	Book.find()
		.populate("author")
		.populate("category")
		.exec(function (err, list_books) {
			//if err is true, then pass control to next handler.
			if (err) {
				return next(err);
			}
			//its successful so send data back to the browser/app
			res.json({ status: 1, data: list_books });
		});
};
