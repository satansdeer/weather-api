const express = require("express");
const axios = require("axios");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res, next) {
  axios
    .get("https://api.darksky.net/forecast/api_key/37.8267,-122.4233")
    .then(resp => res.send(resp.data))
    .catch(next);
});

app.listen(3001, () => console.log("Example app listening on port 3001!"));
