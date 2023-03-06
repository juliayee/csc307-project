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
  if (task === undefined && category === undefined && duedate === undefined && priority === undefined) {
    result = await userModel.find().sort({duedate : 1});
  } else if (task && !category && !duedate && !priority) {
    result = await findUserByTask(task);
  } else if (category && !task && !duedate && !priority) {
    result = await findUserByCategory(category);
  } else if (duedate && !task && !category && !priority) {
    result = await findUserBydueDate(duedate);
  } else if (priority && !task && !category && !duedate) {
    result = await findUserBydueDate(priority);
  }
  return result;
}


async function deleteUsers(task, category, duedate) {
  let result;
  if (task === undefined && category === undefined && duedate === undefined) {
    result = await userModel.find();
  } else if (task && !category && !duedate) {
    result = await deleteUserByTask(task);
  } else if (category && !task && !duedate) {
    result = await deleteUserByCat(category);
  } else if (duedate && !task && !category) {
    result = await deleteUserBydueDate(duedate);
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

async function findUserBydueDate(duedate) {
  return await userModel.find({ duedate: duedate });
}

async function deleteUserByCategory(category) {
  return await userModel.remove({ category: category });
}

async function deleteUserByTask(task) {
  return await userModel.remove({ task: task });
}

async function deleteUserBydueDate(duedate) {
  return await userModel.remove({ duedate: duedate });
}

exports.getUsers = getUsers;
exports.getUserByCategory = getUserByCategory;
exports.findUserById = findUserById;
exports.deleteUserByCat = deleteUserByCat;
exports.deleteUserByT = deleteUserByT;
exports.addUser = addUser;
