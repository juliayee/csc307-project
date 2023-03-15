import React from 'react'

var category_val = null;

function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>Category</th>
          <th>Due Date</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
    );
  }

  function TableBody(props) {
    /*Gets rows with data and sees if category matches*/
    /*If yes, displayed in table*/
    const rows = props.characterData.map((row, index) => {
      if(row.category === category_val){
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
    } else{
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

  function submitCategory() {
    category_val = document.getElementById("cat").value;
  }

  function Table (props) {
    return (
      <table>
        <td>
          <label htmlFor="task">Enter a Category</label>
          <input type="text" id="cat"/>
          <button onClick={submitCategory}>Enter</button>
        </td>
        <TableHeader />
        <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
      </table>
    );
  }
  export default Table;