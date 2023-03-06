import React from 'react'

function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>Week</th>
          <th>Due Date</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
    );
  }

  function TableBody(props) {
    //const today = "2/23/23";
    //MM/DD/YYYY or single digits remain single digits
    let date = row.duedate;
    //[Month, Day, Year]
    let mdy = date.split("/");

    let today = new Date().toLocaleDateString();
    const target = today.split("/");

    const rows = props.characterData.map((row, index) => {
    for(let i = 0; i < 7; i++){
            if(mdy[0] === target[0] && mdy[1] === target[1]
                    && mdy[2] === target[2]){
                return (
                    <tr key={index}>      
            <td>{row.task}</td>
            <td>{row.duedate}</td>
            <td>{row.category}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
            </tr>
                );
        } 
        else{
            return null;
        }
        mdy[1] = toString(parseInt(mdy[1]) + 1);
    }
    
     }
    );
    return (
        <tbody>
          {rows}
         </tbody>
     );
  }
  
  
  function Table (props) {
    return (
      <table>
        <TableHeader />
        <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
      </table>
    );
  }
  export default Table;