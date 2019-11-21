const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassDetailSchema = mongoose.Schema({
  room: { type: Schema.Types.ObjectId, ref: 'Room' },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
  batch: { type: Schema.Types.ObjectId, ref: 'Batch' },
  start: {type: Date},
  end: {type: Date},
  classDetailType: {type: String}
});

const ClassDetail = mongoose.model("Class", ClassDetailSchema);

module.exports = ClassDetail;
