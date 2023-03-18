// exports.findUserBydeadline = findUserBydeadline;
// exports.updateList = updateList;

/* import { findUserBycategory } from './backend.js';

/* 
- getUsers - 5 tests
- deleteUsers - 4 tests 
getUserByCategory - 2 tests --needs 1 more
deleteUserByCat - 2 tests
deleteUserByT - 2 tests
findUserById - ??
*addUser - ??
- findUserByTask
- findUserByCategory
- findUserBydueDate
deleteUserByCategory
deleteUserByTask
deleteUserBydueDate
deleteUserById

only delete is deleteByID

*/

const myFunctions = require("./models/user-services.js");

test("Testing getUsers 1, all params undefined -- success", async () => {
  const result = await myFunctions.getUsers();
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing getUsers 2, only task defined -- success", async () => {
  const result = await myFunctions.getUsers("HW6");
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing getUsers 3, only category defined -- success", async () => {
  const result = await myFunctions.getUsers("", "Math", "", "");
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing getUsers 4, only duedate defined -- success", async () => {
  const result = await myFunctions.getUsers("", "", "3/11/2023", "");
  expect(result).toEqual(expect.arrayContaining(result));
});

/*test("Testing getUsers 5, only priority defined -- success", async () => {
  const result = myFunctions.getUsers("", "", "", "yes");
  console.log(result);
  // expect(result).toEqual(expect.arrayContaining(result));
});*/

test("Testing deleteUser1, all undefined -- success", async () => {
  const delUser = myFunctions.deleteUserById("6413efc052d0b3297bd59bcd");
  expect(delUser).toEqual(expect.objectContaining(delUser));
});

test("Testing addUser 1 -- success", async () => {
  const user_to_add = myFunctions.addUser("HW5", "Science", "3/17/2023", "yes");
  const result = await myFunctions.addUser(user_to_add);
  expect(result).toEqual(expect.objectContaining(user_to_add));
});

// test("Testing deleteUser2, task undefined -- success", async () => {
//   const delUser = myFunctions.deleteUsers({
//     task: undefined,
//     category: "csc307",
//     duedate: "3/15/23",
//   });
//   expect(result).toEqual(false);
// });

// test("Testing deleteUser3, category undefined -- success", async () => {
//   const delUser = myFunctions.deleteUsers({
//     task: "make presentation",
//     category: undefined,
//     duedate: "3/15/23",
//   });
//   expect(result).toEqual(false);
// });

// test("Testing deleteUser4, duedate undefined -- success", async () => {
//   const delUser = myFunctions.deleteUsers({
//     task: "make presentation",
//     category: "math 144",
//     duedate: undefined,
//   });
//   expect(result).toEqual(false);
// });

// test("Testing getUserByCategory -- success", async () => {
//   const result = await myFunctions.getUsers("csc307" );
//   expect(result).toEqual(expect.arrayContaining(result));
// });

// test("Testing findUserByTask -- success", async () => {
//   const users = [
//     ["csc307", "project", "3/14/23", "yes"],
//     ["ant101", "lab 4", "3/16/23", "no"],
//   ];
//   const target = ["csc307", "project", "3/14/23", "yes"];
//   const result = myFunctions.findUserByTask("project");
//   expect(target).toBe(result);
// });

// test("Testing findUserByCategory -- success", async () => {
//   const users = [
//     ["csc307", "project", "3/14/23", "yes"],
//     ["ant101", "lab 4", "3/16/23", "no"],
//   ];
//   const target = ["csc307", "project", "3/14/23", "yes"];
//   const result = myFunctions.findUserByCategory("csc307");
//   expect(target).toBe(result);
// });

// test("Testing findUserBydueDate -- success", async () => {
//   const users = [
//     ["csc307", "project", "3/14/23", "yes"],
//     ["ant101", "lab 4", "3/16/23", "no"],
//   ];
//   const target = ["csc307", "project", "3/14/23", "yes"];
//   const result = myFunctions.findUserBydueDate("3/14/23");
//   expect(target).toBe(result);
// });

/*test("Testing deleteUserByCategory 1 -- success", asych () => {
    const delUser = await myFunctions.findUserByCategory("csc307");
    const result = await myFunctions.delUser({category: "csc307"});
    expect(result).toEqual(expect.objectContaining(result)); 
})

test("Testing deleteUserByCategory 2 -- success", asych () => {
    const delUser = {category: "csc307"};
    const result = await myFunctions.delUser(delUser);
    expect(result).toEqual(expect.objectContaining(result)); 
})*/
