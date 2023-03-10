//import React, {useState} from 'react';
import Table from './Table';
import TodayTable from './TodayTable';
import PriorityTable from './PriorityTable';
import CategoryTable from './CategoryTable';
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Calendar from './components/Calendar';

function MyApp() {
  useEffect(() => {
    fetchAll().then( result => {
       if (result)
          setCharacters(result);
     });
  }, [] );
  

  const [characters, setCharacters] = useState([]);
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <TodayTable characterData={characters} removeCharacter={removeOneCharacter} />
      <PriorityTable characterData={characters} removeCharacter={removeOneCharacter} />
      <CategoryTable characterData={characters} removeCharacter={removeOneCharacter} />
      <Calendar/>
      <Form handleSubmit={updateList} />
    </div>
  )

function removeOneCharacter(index) {
   // go to index, get the id, assign to id
   const id = characters[index]._id;
   console.log(characters[index]);
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

//------------- Calender stuff below -----------

export default MyApp;
