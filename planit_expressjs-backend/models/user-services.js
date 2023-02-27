const mongoose = require("mongoose");
const userModel = require("./user");
mongoose.set("debug", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

async function getUsers(task) {
  let result;
  if (task === undefined) {
    result = await userModel.find();
  } else if (task) {
    result = await findUserByTask(task);
  }
  return result;
}

async function getUserByCategory(category) {
  let result;
  if (category === undefined) {
    result = await userModel.find();
  } else if (category) {
    result = await findUserByCategory(category);
  }
  return result;
}

async function deleteUserByCat(category) {
  let result;
  if (category === undefined) {
    result = await userModel.find();
  } else if (category) {
    result = await deleteUserByCategory(category);
  }
  return result;
}

async function deleteUserByT(task) {
  let result;
  if (category === undefined) {
    result = await userModel.find();
  } else if (category) {
    result = await deleteUserByTask(task);
  }
  return result;
}

async function findUserById(id) {
  try {
    return await userModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addUser(user) {
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findUserByTask(task) {
  return await userModel.find({ task: task });
}

async function findUserByCategory(category) {
  return await userModel.find({ category: category });
}

async function deleteUserByCategory(category) {
  return await userModel.remove({ category: category });
}

async function deleteUserByTask(task) {
  return await userModel.remove({ task: task });
}

exports.getUsers = getUsers;
exports.getUserByCategory = getUserByCategory;
exports.findUserById = findUserById;
exports.deleteUserByCat = deleteUserByCat;
exports.deleteUserByT = deleteUserByT;
exports.addUser = addUser;
