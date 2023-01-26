const express = require("express");
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
  client: "pg",
  connection: {
    host: "dpg-cf8k63cgqg47fti1nekg-a",
    port: 5432,
    user: "marko",
    password: "AelcKXD2BOx2YzsYrVyliFTAcxoHUQOS",
    database: "smart_brain_wvnp",
  },
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("connection ok");
});

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

// Load hash from your password DB.

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
