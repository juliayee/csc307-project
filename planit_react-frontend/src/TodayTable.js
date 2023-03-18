import React from 'react'

function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>Today's Tasks</th>
          <th>Due Date</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
    );
  }

  function TableBody(props) {
    //const today = "2/23/23";
    const today = new Date().toLocaleDateString();
    //MM/DD/YYYY or single digits remain single digits
    const rows = props.characterData.map((row, index) => {
      if(row.duedate === today){
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