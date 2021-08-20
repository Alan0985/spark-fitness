const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");

var webdriver = require("selenium-webdriver");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const explores = require("./routes/api/explores");

const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB Config
// const db = require("./key/keys").mongoURI;
const db = process.env.mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//Passport
app.use(passport.initialize());
require("./key/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/explores", explores);

//Check Production Mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running On Port ${port}`));
