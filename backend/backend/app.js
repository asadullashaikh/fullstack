//i include http-errors library
var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
//looger is used to do logging.
var logger = require("morgan");
var mongoose = require("mongoose");
console.log("app.js ran");
//we need to include the routers in this file.
/*var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var userRouter = require("./routes/user");
//you dont need to mention the .js extension. express and node automatically understands it
var ordersRouter = require("./routes/orders");
var cookiesRouter = require("./routes/cookies");
var dbRouter = require("./routes/db");
var hobbyRouter = require("./routes/hobby");*/
var registrationRouter = require("./routes/registration");
var todoRouter = require("./routes/todo");
/*const bookRouter = require("./routes/book");
const session = require("express-session");
const sessionRouter = require("./routes/session");*/

//install doing npm install mongodb. this will install mongodb client which has functions to connect to
//mongo database.Below line we are including MongoClient which is coming from mongodb library
var mongoClient = require("mongodb").MongoClient;
//this is line that creates the express applicatino and gets returned the variable of express app with name app.
let app = express();
app.use(express.json());
app.use(
  session({
    secret: "session_secret_key",
    resave: true,
    saveUnitialized: true,
    cookie: {
      secure: false,
      maxAge: 45000,
    },
  })
);
app.use(cors());
let mongoConnUrl = "mongodb://localhost/assignment";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
/*mongoose.connect("mongodb+srv://asad:asad@food.t3645.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })*/
let db = mongoose.connection;



db.on("error", function () {
  console.log("Error came in connecting");
});
// view engine setup
//set up the views for express app and provide the directory where we keep the view templates. means pug templates.
app.set("views", path.join(__dirname, "views"));
//this line tells express to use pug as view engine.
app.set("view engine", "pug");
//we are creating logger and giving it a name dev. we can have diff loggers.
app.use(logger("dev"));
//if we r creating our api, we will send json data and receive it. so we supply this parameter to be able to
//send json and receive request that contain json
app.use(express.json());
//this parameters is passes to be able to read the url.
app.use(express.urlencoded({ extended: false }));
//cookie parser is used to read cookies. without that we can not read cookies.
app.use(cookieParser());
//this line lets express directly load files from public folder.
app.use(express.static(path.join(__dirname, "public")));
//this line is telling that include index router and the base path is / .
app.use("/", indexRouter);
//i am including usersRouter and base path is /users
app.use("/users", usersRouter);
app.use("/hobby", hobbyRouter);
//this line will include ordersRouter and
//give /orders as the base url.
app.use("/orders", ordersRouter);
app.use("/cookies", cookiesRouter);
app.use("/db", dbRouter);
var authorRouter = require("./routes/author");
app.use("/user",userRouter)
app.use("/author", authorRouter);
app.use("/todo", todoRouter);
app.use("/book", bookRouter);
app.use("/session", sessionRouter);
app.use("/registration", registrationRouter);
app.use("/todo", todoRouter);
// catch 404 and forvarward to error handler
//this line here creates 404 error if no route is matched
app.use(function (req, res, next) {
  res.render("customerror", {
    message: "You tried to access a url thats not defined",
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
