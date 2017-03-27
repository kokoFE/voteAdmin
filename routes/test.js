var express = require('express');
var router = express.Router();
var db = require('../models/db');

var Lecturer = db.lecturer;

router.get('/test', (req, res)=> {
  // var lecturer = new Lecturer({
  //   name: "一灯大师",
  //   introduce: "北帝"
  // })
  // lecturer.save();
  // res.send('data saved')
  Lecturer.find({})
        .then(function (lec){
        res.json(lec)
        // res.json({"name":"tom"})
      })
      .catch(function (err){
        res.json(err)
      })
})

// router.get('/testagain', (req, res) => {
//   User.find((err, doc) => {
//     res.json(doc)
//   })
// })

module.exports = router;