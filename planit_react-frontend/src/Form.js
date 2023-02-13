import React, {useState} from 'react';

function Form(props) {
  const [person, setPerson] = useState(
     {
        task: "",
        duedate: "",
        category: "",
     }
  );

  function handleChange(event) {
    const { task, value } = event.target;
    if (task === "duedate")
      setPerson(
         {task: person['task'], duedate: value}
      );
    else     
       setPerson(
         {task: value, duedate: person['duedate']}   
       );

    const { duedate, item } = event.target;
    if (duedate === "duedate")
      setPerson(
        {task: person['duedate'], duedate: item}
      );
    else     
      setPerson(
        {task: item, duedate: person['duedate']}   
      );

    const { category, cat } = event.target;
    if (category === "category")
      setPerson(
        {task: person['category'], category: cat}
      );
    else     
      setPerson(
        {task: cat, duedate: person['category']}   
      );
  }

  function submitForm() {
    props.handleSubmit(person);
    setPerson({task: '', duedate: '', category: ''});
  }

  return (
    <form>
      <label htmlFor="task">Task</label>
      <input
        type="text"
        task="task"
        id="task"
        value={person.task}
        onChange={handleChange} />
      <label htmlFor="duedate">Due Date</label>
      <input
        type="text"
        task="duedate"
        id="duedate"
        value={person.duedate}
        onChange={handleChange} />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        task="category"
        id="category"
        value={person.category}
        onChange={handleChange} />
        <input type="button" value="Submit" onClick={submitForm} />
    </form>
);

}

export default Form;