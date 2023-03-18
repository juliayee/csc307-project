const mongoose = require("mongoose");
const userModel = require("./user");
mongoose.set("debug", true);
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

async function getUsers(task, category, duedate, priority) {
  let result;
  if (
    task === undefined && // 5 tests all undef, task undef,
    category === undefined &&
    duedate === undefined &&
    priority === undefined
  ) {
    result = await userModel.find().sort({ duedate: 1 });
  } else if (task && !category && !duedate && !priority) {
    result = await findUserByTask(task);
  } else if (category && !task && !duedate && !priority) {
    result = await findUserByCategory(category);
  } else if (duedate && !task && !category && !priority) {
    result = await findUserBydueDate(duedate);
  }
  return result;
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

async function findUserBydueDate(duedate) {
  return await userModel.find({ duedate: duedate });
}

async function deleteUserById(id) {
  return await userModel.findByIdAndDelete(id);
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUserById = deleteUserById;

/* 
getUsers - 5 tests
deleteUsers - 4 tests 
getUserByCategory - 2 tests
deleteUserByCat - 2 tests
deleteUserByT - 2 tests
findUserById - ??
addUser - ??
findUserByTask
findUserByCategory
findUserBydueDate
deleteUserByCategory
deleteUserByTask
deleteUserBydueDate
deleteUserById
*/
