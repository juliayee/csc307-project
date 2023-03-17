//import React, {useState} from 'react';
import Table from './Table';
import TodayTable from './TodayTable';
import PriorityTable from './PriorityTable';
import CategoryTable from './CategoryTable';
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';






//0-Home, 1-Daily, 2-Priority, 3-Week
function MyApp() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    fetchAll().then( result => {
       if (result)
          setCharacters(result);
     });
  }, [] );

  useEffect(() => {
  }, [page]);
  



  

  function removeOneCharacter(index) {
    // go to index, get the id, assign to id
    const id = characters[index]._id;
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


  //Buttons

  function handleHomeClick(props){
    setPage(0);
    console.log(page);
  };

  function handleDailyClick(page){
    setPage(1);
    console.log(page);
  }

  function handlePriorityClick(page){
    setPage(2);
    console.log(page);
  }

  function handleWeeklyClick(page){
    setPage(3);
    console.log(page);
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




  if(page === 0){
    console.log("home page")
    
    return (
    <>
      <div className='container'>
        <h1>Home</h1>; 
        <input type="button" value="Home" onClick={handleHomeClick} />
        <input type="button" value="Daily" onClick={handleDailyClick} />
        <input type="button" value="Priority" onClick={handlePriorityClick} />
        <input type="button" value="Category" onClick={handleWeeklyClick} />
        <Table characterData={characters} removeCharacter={removeOneCharacter} />
        <Form handleSubmit={updateList} />
      </div>
    </>
    )
  }
  else if(page === 1){
    console.log("daily page")
    
    return (
    <>
      <div className='container'>
        <h1>Daily Tasks</h1>; 
        <input type="button" value="Home" onClick={handleHomeClick} />
        <input type="button" value="Daily" onClick={handleDailyClick} />
        <input type="button" value="Priority" onClick={handlePriorityClick} />
        <input type="button" value="Category" onClick={handleWeeklyClick} />
        <TodayTable characterData={characters} removeCharacter={removeOneCharacter} />
      </div>
    </>
    )
  }

  else if(page === 2){
    console.log("priority page")
    
    return (
    <>
      <div className='container'>
        <h1>My Priority</h1>; 
        <input type="button" value="Home" onClick={handleHomeClick} />
        <input type="button" value="Daily" onClick={handleDailyClick} />
        <input type="button" value="Priority" onClick={handlePriorityClick} />
        <input type="button" value="Category" onClick={handleWeeklyClick} />
        <PriorityTable characterData={characters} removeCharacter={removeOneCharacter} />
      </div>
    </>
    )
  }

  else{
    console.log("daily page")
    return (
    <>

      <div className='container'>
        <h1>My Weekly Schedule</h1>
        <input type="button" value="Home" onClick={handleHomeClick} />
        <input type="button" value="Daily" onClick={handleDailyClick} />
        <input type="button" value="Priority" onClick={handlePriorityClick} />
        <input type="button" value="Category" onClick={handleWeeklyClick} />  
        <CategoryTable characterData={characters} removeCharacter={removeOneCharacter} />
      </div>
    </> 
    ) 
  }



    
   

    
//     </>
//   )
}
export default MyApp;