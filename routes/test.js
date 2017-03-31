var express = require('express');
var router = express.Router();
var db = require('../models/db');
var multer = require('multer');

var Lecturer = db.lecturer;

router.get('/test', (req, res)=> {
  Lecturer.find({})
        .then(function (lec){
        res.json(lec)
        // res.json({"name":"tom"})
      })
      .catch(function (err){
        res.json(err)
      })
})

var upload = multer({dest: 'upload/'})
// router.post('/upload', upload.single('logo'), (req, res, next) => {
//   var data = new Lecturer({
//     name: req.body.name,
//     introduce: req.body.introduce
//   })
//   data.save(function(err, doc){
//     console.log(doc);
//   }) 
//   res.send("success")
// })

router.post('/testagain', upload.single('logo'), (req, res, next) => {
  var data = new Lecturer({
    name: req.body.name,
    introduce: req.body.introduce
  })
  console.log(req)
  data.save(function(err, doc){
    console.log(doc);
  })
  // User.find((err, doc) => {
  //   res.json(doc)
  // })
})

module.exports = router;