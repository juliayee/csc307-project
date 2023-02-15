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
    const { name, value } = event.target;
    if (name === "task")
      setPerson(
         {task: value, duedate: person['duedate'], category: person["category"]}
      );

    else if (name === "duedate")
      setPerson(
        {task: person['task'], duedate: value, category: person["category"]}
      );

    else if (name === "category")
      setPerson(
        {task: person['task'], duedate: person["duedate"], category: value}
      );
  }

  function submitForm() {
    props.handleSubmit(person);
    console.log(person);
    setPerson({task: '', duedate: '', category: ''});
  }

  return (
    <form>
      <label htmlFor="task">Task</label>
      <input
        type="text"
        name="task"
        id="task"
        value={person.task}
        onChange={handleChange} />
      <label htmlFor="duedate">Due Date</label>
      <input
        type="text"
        name="duedate"
        id="duedate"
        value={person.duedate}
        onChange={handleChange} />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category"
        value={person.category}
        onChange={handleChange} />
        <input type="button" value="Submit" onClick={submitForm} />
    </form>
);

}

export default Form;