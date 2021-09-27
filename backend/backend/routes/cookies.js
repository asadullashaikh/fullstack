var express = require("express");
var router = express.Router();
//this route sets the cookie with name as city and value as Bangalore
router.get("/setcookie/:name/:cookieValue/:age", function (req, res) {
	//in maxAge the time is in milliseconds. So if we want cookie to last for a day we need to
	//get total no of milliseconds in a day 840000*1000
	res.cookie(req.params.name, req.params.cookieValue, {
		maxAge: req.params.age,
	});
	res.send(
		`cookie ${req.params.name} with value ${req.params.cookieValue} set`
	);
});
//this route is going to read the cookie
router.get("/readcookie", function (req, res) {
	//to get the cookie we use req.cookies.<cookiename> .ex req.cookies.city as city is the name of the cookie
	let output = "";
	//all cookies are available in req.cookies which becomes an object with properties as name of cookies and value of
	//properties as value of cookie
	for (let index in req.cookies) {
		output += `<div>cookie name:${index} and value = ${req.cookies[index]}</div>`;
	}
	console.log(output);
	res.send(output);
	//http://localhost:3000/cookies/setcookie/favdish/dalchawal
});
//this route deletes the city cookie
router.get("/deletecitycookie", function (req, res) {
	res.clearCookie("city");
	res.send("cookie with name city is deleted");
});
router.get("/setcookiewithtime", function (req, res) {
	res.cookie("timebased", "another way of setting time", {
		expires: new Date(10000 + Date.now()),
	});
	res.send("cookie set");
});
module.exports = router;
