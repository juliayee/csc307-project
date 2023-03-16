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
addUser - ??
- findUserByTask
- findUserByCategory
- findUserBydueDate
deleteUserByCategory
deleteUserByTask
deleteUserBydueDate
deleteUserById
*/

import { getUsers } from "./planit_expressjs-backend/models/user-services.js";
import "./user-services.js";

const myFunctions = require("./user-services.js");

test("Testing getUsers 1, all params undefined -- success", async () => {
  const result = (await user) - services.getUsers({});
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing getUsers 2, only task undefined -- success", async () => {
  const result =
    (await user) - // I don't want these parens but when I click save it adds them!!?
    services.getUsers({
      task: undefined,
      category: "math",
      duedate: 3 / 15 / 23,
      priority: "no",
    });
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing getUsers 3, only category undefined -- success", async () => {
  const result =
    (await user) -
    services.getUsers({
      task: "project 1",
      category: undefined,
      duedate: 3 / 15 / 23,
      priority: "no",
    });
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing getUsers 4, only duedate undefined -- success", async () => {
  const result =
    (await user) -
    services.getUsers({
      task: "project 1",
      category: "csc307",
      duedate: undefined,
      priority: "no",
    });
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing getUsers 5, only priority undefined -- success", async () => {
  const result =
    user -
    services.getUsers({
      task: "project 1",
      category: "csc307",
      duedate: 3 / 15 / 23,
      priority: undefined,
    });
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing deleteUser1, all undefined -- success", async () => {
  const delUser = user - services.deleteUsers({});
  expect(result).toEqual(false);
});

test("Testing deleteUser2, task undefined -- success", async () => {
  const delUser =
    user -
    services.deleteUsers({
      task: undefined,
      category: "csc307",
      duedate: 3 / 17 / 23,
    });
  expect(result).toEqual(false);
});

test("Testing deleteUser3, category undefined -- success", async () => {
  const delUser =
    user -
    services.deleteUsers({
      task: "make presentation",
      category: undefined,
      duedate: 3 / 17 / 23,
    });
  expect(result).toEqual(false);
});

test("Testing deleteUser4, duedate undefined -- success", async () => {
  const delUser =
    user -
    services.deleteUsers({
      task: "make presentation",
      category: "math 144",
      duedate: undefined,
    });
  expect(result).toEqual(false);
});

test("Testing getUserByCategory -- success", async () => {
  const result = (await user) - services.getUsers({ category: "csc307" });
  expect(result).toEqual(expect.arrayContaining(result));
});

test("Testing findUserByTask -- success", async () => {
  const users = [
    ["csc307", "project", "3/14/23", "yes"],
    ["ant101", "lab 4", "3/16/23", "no"],
  ];
  const target = ["csc307", "project", "3/14/23", "yes"];
  const result = myFunctions.findUserByTask("project");
  expect(target).toBe(result);
});

test("Testing findUserByCategory -- success", async () => {
  const users = [
    ["csc307", "project", "3/14/23", "yes"],
    ["ant101", "lab 4", "3/16/23", "no"],
  ];
  const target = ["csc307", "project", "3/14/23", "yes"];
  const result = myFunctions.findUserByCategory("csc307");
  expect(target).toBe(result);
});

test("Testing findUserBydueDate -- success", async () => {
  const users = [
    ["csc307", "project", "3/14/23", "yes"],
    ["ant101", "lab 4", "3/16/23", "no"],
  ];
  const target = ["csc307", "project", "3/14/23", "yes"];
  const result = myFunctions.findUserBydueDate("3/14/23");
  expect(target).toBe(result);
});
