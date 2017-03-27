const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  name: String,
  introduce: String
});

exports.lecturer = mongoose.model('lecturer', testSchema);