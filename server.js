const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("this is working");
});

app.listen(port, () => {
  console.log(`app is runnong on ${port}`);
});


/*
/ --> res = this is workin
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user