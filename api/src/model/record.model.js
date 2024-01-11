const mongoose = require("mongoose");

const Record = mongoose.model("Record", {
  userId:mongoose.Schema.Types.ObjectId,
  type: String,
  category: String,
  amount: Number,
  date: Date,
  payee: String,
  note: String,
  categoryColor: String,
  iconName: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Record,
};
