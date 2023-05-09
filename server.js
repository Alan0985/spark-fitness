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

////////////////////////////////////////////////////////////
const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = require("./key/keys").mongoURI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("myFirstDatabase").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

////////////////////////////////////////////////////////////

// DB Config
const db = require("./key/keys").mongoURI;

//Connect to MongoDB
// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

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

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server Running On Port ${port}`));
