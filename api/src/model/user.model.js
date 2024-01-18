const mongoose=require("mongoose")

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  currency: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
    User,
}