import React, {useState} from 'react'

//const [category_val, setCategoryVal] = useState(null);
  function Table (props) {
function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>Task</th>
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
    console.log("Entering table body.")
    const rows = props.characterData.map((row, index) => {
      console.log("rows" + row.category);
      console.log("cat val" + category_val);
      if(row.category === category_val){
        console.log("returning category")
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
      console.log("returning null");
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
    setCategoryVal(category);
    console.log(category_val);
  }

  function handleChange(event) {
    const { value } = event.target;
     setCategory(value);
  }


    const [category_val, setCategoryVal] = useState(null);
    const [category, setCategory] = useState(null);
    return (
      <div>
        <form>
          <label htmlFor="task">Enter a Category</label>
          <input type="text" id="cat" value={category_val} onChange={handleChange}/>
          <input type="button" value="Enter" onClick={submitCategory} />
        </form>
        <table>
          <TableHeader />
          <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
        </table> 
      </div>

    );
  }
  export default Table;