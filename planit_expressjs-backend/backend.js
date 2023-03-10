const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const { response } = require("express");

app.use(cors());
app.use(express.json());
const userServices = require("./models/user-services");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(port, () => {
// console.log(`Example app listening at http://localhost:${port}`);
// });

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});

// const users = {
//   users_list: [
//     {
//       category: "math",
//       task: "hw 7",
//       duedate: "2/18/23",
//     },
//     {
//       category: "cs307",
//       task: "project",
//       duedate: "2/14/23",
//     },
//     {
//       category: "cs307",
//       task: "quiz",
//       duedate: "2/20/23",
//     },
//     {
//       category: "fitness",
//       task: "yoga",
//       duedate: "2/13/23",
//     },
//   ],
// };

app.get("/users", async (req, res) => {
  const task = req.query.task;
  const category = req.query.category;
  const duedate = req.query.duedate;
  const priority = req.query.priority;
  try {
    const result = await userServices.getUsers(
      task,
      category,
      duedate,
      priority
    );
    // result = { users_list: result };
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

const findUserBytask = (task) => {
  return users["users_list"].filter((user) => user["task"] === task);
};

app.get("/users/:id", (req, res) => {
  const category = req.params["category"]; //or req.params.category
  let result = userServices.getUserByCategory(category);
  if (result === undefined || result.length == 0)
    res.status(404).send("Resource not found.");
  else {
    // result = { users_list: result };
    res.send(result);
  }
});

// app.delete("/users/:id", async (req, res) => {
//   const id = req.params["id"]; //or req.params.id
//   const result = await userServices.deleteUserById(id);
//   if (result === undefined || result.length == 0)
//     res.status(404).send("Resource not found.");
//   else {
//     // users['users_list'] = users['users_list'].filter( (user) => user['id'] !== id);
//     // res.send(id);
//     // res.send({ users_list: result });
//     res.status(500).send("An error ocurred in the server.");
//     // result = {users_list: result};
//   }
// });

function findUserBycategory(category) {
  return users["users_list"].find((user) => user["category"] === category); // or line below
  //return users['users_list'].filter( (user) => user['category'] === category);
}

app.post("/users", async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.addUser(user);
  if (savedUser) res.status(201).send(savedUser);
  else res.status(500).end();
});

function addUser(user) {
  users["users_list"].push(user);
}

app.delete("/users/:id", async (req, res) => {
  const userToDelete = req.params["id"];
  try {
    const result = await userServices.deleteUserById(userToDelete);
    // result = { users_list: result };
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

function deleteUser(i) {
  users["users_list"].splice(i, 1);
}

function findIndexBycategory(category) {
  return users["users_list"].findIndex((user) => user["category"] === category); // or line below
  //return users['users_list'].filter( (user) => user['category'] === category);
}

app.get("/users", (req, res) => {
  const task = req.query.task;
  const deadline = req.query.deadline;
  if (task != undefined) {
    let result = findUserBytask(task);
    result = { users_list: result };
    res.send(result);
  }
  if (deadline != undefined) {
    let result = findUserBydeadline(deadline);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

const findUserBydeadline = (deadline) => {
  return users["users_list"].filter((user) => user["deadline"] === deadline);
};
