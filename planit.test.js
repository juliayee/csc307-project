// exports.findUserBydeadline = findUserBydeadline;
// exports.updateList = updateList;

/* import { findUserBycategory } from './backend.js';

const myFunctions = require('./backend.js');
const myFunctions = require('.MyApp.js');

test('Testing findUserBydeadline -- success', () => {
    const users = [["csc307", "project", "3/14/23", "yes"], ["ant101", "lab 4", "3/16/23", "no"]];
    const target = ["csc307", "project", "3/14/23", "yes"];
    const result = myFunctions.findUserBydeadline("3/14/23");
    expect(target).toBe(result);
});

// test('Testing updateList -- success', () => {
//     person = ["csc307", "project", "3/14/23", "yes"];
//     const target = ;
//     const result = myFunctions.updateList(person);
//     expect(target).toBe(result);
// });
// doesnt return anything so prob a bad one to test
// Can says compare the list after updating it */



// ________________________________________________________________ NEW WORK
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

const myFunctions = require('./user-services.js');

test('Testing getUsers 1, all params undefined -- success', () => {
    
});

test('Testing getUsers 2, only task undefined -- success', () => {
    
});

test('Testing getUsers 3, only category undefined -- success', () => {
    
});

test('Testing getUsers 4, only duedate undefined -- success', () => {
    
});

test('Testing getUsers 5, only priority undefined -- success', () => {
    
});

test('Testing findUserBydueDate -- success', () => {
    const users = [["csc307", "project", "3/14/23", "yes"], ["ant101", "lab 4", "3/16/23", "no"]];
    const target = ["csc307", "project", "3/14/23", "yes"];
    const result = myFunctions.findUserBydueDate("3/14/23");
    expect(target).toBe(result);
});