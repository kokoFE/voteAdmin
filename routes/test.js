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

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    var suffix = file.originalname.split('.')[1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + suffix);
  }
});
var upload = multer({storage: storage});

router.post('/addGuest', upload.single('logo'), (req, res, next) => {
  console.log(req.file)
  var data = new Lecturer({
    name: req.body.name,
    introduce: req.body.introduce,
    imgUrl: '3'
  })
  data.save(function(err, doc){
    console.log(err);
  })
})

module.exports = router;