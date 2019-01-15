const router = require("express").Router();
import pass from '../passes';
const mysql = require('mysql');
const con = mysql.createPool({
  host: pass.mysql.host,
  user: pass.mysql.user,
  password: pass.mysql.pwd,
  database: "malilnickaau_zoe",
  charset: "utf8mb4"
});

router.get("/", (req, res) => {
  con.getConnection(function (err, connection) {
    if (err) throw err;
    console.log("Connected!");
    if (req.query.q) {
      con.query('select * from `ang` where `title` like "%' + req.query.q + '%"', function (
        error, results, fields) {
        if (error) throw error;
        res.send(results);
      });

    }
  });
});
router.get("/count", (req, res) => {
  con.getConnection(function (err, connection) {
    if (err) throw err;
    console.log("Connected!");
    con.query('select count(*) as "number" from `ang`', function (error, results,
      fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});
router.get("/limit", (req, res) => {
  con.getConnection(function (err, connection) {
    if (err) throw err;
    con.query('select * from `ang` order by rand() limit ' + req.query.q, function (
      error,
      results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

module.exports = router;
