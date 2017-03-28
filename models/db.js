const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  introduce: String,
  createTime: {
    type: Date,
    default: Date.now
  }
});
// var lecturer = mongoose.model('lecturer', testSchema);
// module.exports = lecturer;
exports.lecturer = mongoose.model('lecturer', testSchema);