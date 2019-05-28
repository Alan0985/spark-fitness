const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
// const cors = require("cors");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const explores = require("./routes/api/explores");

const app = express();
// app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//Image Upload To Cloudinary
require("dotenv").config();
const cloudinary = require("cloudinary");
const formData = require("express-form-data");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.use(formData.parse());

// var corsOptions = {
//   origin: "https://spark-fitness.herokuapp.com",
//   optionsSuccessStatus: 200
// };

app.post("/image-upload", (req, res) => {
  // cors(corsOptions),
  const values = Object.values(req.files);
  const promises = values.map(image => cloudinary.uploader.upload(image.path));

  Promise.all(promises)
    .then(results => res.json(results))
    .catch(err => res.status(400).json(err));
});

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

// Serve any static files built by React
// app.use(express.static(path.join(__dirname, "client/build")));

// //Check Production Mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("/routes/api/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// app.get("/routes/api/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running On Port ${port}`));
