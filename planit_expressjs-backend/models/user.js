const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    duedate: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
