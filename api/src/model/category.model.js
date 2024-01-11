const mongoose = require("mongoose");

const Category = mongoose.model("Category", {
  userId: mongoose.Schema.Types.ObjectId,
  category:String,
  icon:String,
  color:String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Category,
};
