const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://morgild:Bodybodi1220@cluster1.1tebnln.mongodb.net/ExpenseTracker?retryWrites=true&w=majority"
    );
    console.log("Successfully Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDatabase,
};
