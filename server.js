const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const explores = require("./routes/api/explores");

const app = express();

//Image Upload To Cloudinary
// require("dotenv").config();
// const cloudinary = require("cloudinary");
// const formData = require("express-form-data");

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

// app.use(formData.parse());

// app.post("/image-upload", (req, res) => {
//   const values = Object.values(req.files);
//   const promises = values.map(image => cloudinary.uploader.upload(image.path));

//   Promise.all(promises)
//     .then(results => res.json(results))
//     .catch(err => res.status(400).json(err));
// });

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB Config
const db = require("./key/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

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
