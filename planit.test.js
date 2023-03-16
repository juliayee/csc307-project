// exports.findUserBydeadline = findUserBydeadline;
// exports.updateList = updateList;

/* import { findUserBycategory } from './backend.js';

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

import { getUsers } from './planit_expressjs-backend/models/user-services.js';
import './user-services.js';

const myFunctions = require('./user-services.js');

test('Testing getUsers 1, all params undefined -- success', () => {
    const result = user-services.getUsers({});
    expect(result).toEqual(expect.arrayContaining(result));
});

test('Testing getUsers 2, only task undefined -- success', () => {
    const result = user-services.getUsers({task: undefined, category: "math", duedate: 3/15/23, priority: "no"});
    expect(result).toEqual(expect.arrayContaining(result));
});

test('Testing getUsers 3, only category undefined -- success', () => {
    const result = user-services.getUsers({task: "project 1", category: undefined, duedate: 3/15/23, priority: "no"});
    expect(result).toEqual(expect.arrayContaining(result));
});

test('Testing getUsers 4, only duedate undefined -- success', () => {
    const result = user-services.getUsers({task: "project 1", category: "csc307", duedate: undefined, priority: "no"});
    expect(result).toEqual(expect.arrayContaining(result));
});

test('Testing getUsers 5, only priority undefined -- success', () => {
    const result = user-services.getUsers({task: "project 1", category: "csc307", duedate: 3/15/23, priority: undefined});
    expect(result).toEqual(expect.arrayContaining(result));
});

test('Testing deleteUser1 -- success', () => {
    const delUser = user-services.deleteUsers({});
    expect(result).toEqual(false);
});

test('Testing findUserBydueDate -- success', () => {
    const users = [["csc307", "project", "3/14/23", "yes"], ["ant101", "lab 4", "3/16/23", "no"]];
    const target = ["csc307", "project", "3/14/23", "yes"];
    const result = myFunctions.findUserBydueDate("3/14/23");
    expect(target).toBe(result);
});