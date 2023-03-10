//import React, {useState} from 'react';
import Table from './Table';
import TodayTable from './TodayTable';
import PriorityTable from './PriorityTable';
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Layout from './pages/Layout';


import { BrowserRouter, Routes,Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Daily from "./pages/Daily";


function MyApp() {
  useEffect(() => {
    fetchAll().then( result => {
       if (result)
          setCharacters(result);
     });
  }, [] );
  

  const [characters, setCharacters] = useState([]);
  

function removeOneCharacter(index) {
   // go to index, get the id, assign to id
   const id = characters[index].id;
   console.log(id);
   axios.delete('http://localhost:5000/users/'+id);         
  const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }

  function updateList(person) { 
    makePostCall(person).then( result => {
    if (result && result.status === 201)
       setCharacters([...characters, result.data] );
    });
 }

  async function makePostCall(person){
    try {
       const response = await axios.post('http://localhost:5000/users', person);
       console.log(response);
       return response;
    }
    catch (error) {
       console.log(error);
       return false;
    }
 }


async function fetchAll(){
  try {
     const response = await axios.get('http://localhost:5000/users');
     return response.data.users_list;     
  }
  catch (error){
     //We're not handling errors. Just logging into the console.
     console.log(error); 
     return false;         
  }
}




return (<>
   <div className='container'>
   <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/Layout'>Layout</Link>
            </li>
            <li>
              <Link to='/form'>Insert one</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<h1>Choose your path!</h1>} />
          <Route
            path='/Layout'
            element={
              <Layout/>
            }
          />
          <Route path='/form' element={<Form handleSubmit={updateList} />} />
          </Routes>
      </BrowserRouter>   
          <Table characterData={characters} removeCharacter={removeOneCharacter} />
          <TodayTable characterData={characters} removeCharacter={removeOneCharacter} />
          <PriorityTable characterData={characters} removeCharacter={removeOneCharacter} />
          <Form handleSubmit={updateList} />
 
    </div>
    </>
  )
}
export default MyApp;
