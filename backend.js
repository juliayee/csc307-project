const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { response } = require('express');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});    

const users = { 
    users_list :
    [
       { 
          category : 'math',
          task : 'hw 7',
          deadline: '2/18/23',
       },
       {
          category : 'cs307', 
          task: 'project',
          deadline: '2/14/23',
       },
       {
          category : 'cs307', 
          task: 'quiz',
          deadline: '2/20/23',
       }, 
       {
          category: 'fitness', 
          task: 'yoga',
          deadline: '2/13/23',
       }
    ]
 }


app.get('/users', (req, res) => {
    const task = req.query.task;
    if (task != undefined){
        let result = findUserBytask(task);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

const findUserBytask = (task) => { 
    return users['users_list'].filter( (user) => user['task'] === task); 
}

app.get('/users/:category', (req, res) => {
    const category = req.params['category']; //or req.params.category
    let result = findUserBycategory(category);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

function findUserBycategory(category) {
    return users['users_list'].find( (user) => user['category'] === category); // or line below
    //return users['users_list'].filter( (user) => user['category'] === category);
}

/*function randomcategory() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + Math.floor(Math.random()*(999-100+1)+100);
}*/

app.post('/users', (req, res) => {
    //const category = randomcategory();
    const userToAdd = req.body;
    userToAdd.category = category;
    addUser(userToAdd);
    res.status(201).send(userToAdd).end();     
});

function addUser(user){
    users['users_list'].push(user);
}

app.delete('/users/:category', (req, res) => {
    const userToDelete = req.params['category'];
    const i = findIndexBycategory(userToDelete); 
    if (i === undefined || i < 0) {        
        {res.status(404).end();}            
    }
    else {deleteUser(i);
    res.status(204).end();}
});

function deleteUser(i){
    users['users_list'].splice(i, 1);
}

function findIndexBycategory(category) {
    return users['users_list'].findIndex( (user) => user['category'] === category); // or line below
    //return users['users_list'].filter( (user) => user['category'] === category);
}

app.get('/users', (req, res) => {
    const task = req.query.task;
    const deadline = req.query.deadline;
    if (task != undefined) {
        let result = findUserBytask(task);
        result = {users_list: result};
        res.send(result);
    }
    if (deadline != undefined){
        let result = findUserBydeadline(deadline);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

const findUserBydeadline = (deadline) => { 
    return users['users_list'].filter( (user) => user['deadline'] === deadline); 
}