const express = require("express");
const path = require("path");
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const team = require("./routes/api/team");
const membership = require("./routes/api/membership");
const training = require("./routes/api/training");
const contact = require("./routes/api/contact");

//Database
const db = require("./config/db");

//Test DB
db.authenticate()
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Passport
app.use(passport.initialize());
require("./key/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/team", team);
app.use("/api/membership", membership);
app.use("/api/training", training);
app.use("/api/contact", contact);

//Check Production Mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server Running On Port ${port}`));
