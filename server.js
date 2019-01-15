const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const mysql = require("mysql");
app = express();
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

const bodyParser = require("body-parser");

const physic = require("./api/routes/physic");
const english = require("./api/routes/english");
const question = require("./api/routes/question");
app.use(require('express-naked-redirect')());
//app.use(redirectToHTTPS());
app.use(serveStatic(path.join(__dirname, '/dist')));
app.use(function (
  req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Accept,X-Requested-With,Origin,Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use("/api/v01/fizyka", physic);
app.use("/api/v01/angielski", english);
app.use("/api/v01/pytanie", question);
const port = process.env.PORT || 8000;
app.listen(port);
