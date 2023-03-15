import React, {useState} from 'react';
import Calendar from './components/Calendar';
//import * as ReactDOM from 'react-dom';

function Form(props) {
  const [person, setPerson] = useState(
     {
        task: "",
        duedate: "",
        category: "",
        priority: "",
     }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "task")
      setPerson(
         {task: value, duedate: person['duedate'], category: person["category"], priority: person["priority"]}
      );

    else if (name === "duedate")
      setPerson(
        {task: person['task'], duedate: value, category: person["category"], priority: person["priority"]}
      );

    else if (name === "category")
      setPerson(
        {task: person['task'], duedate: person["duedate"], category: value}
      );

      else if (name === "priority")
      setPerson(
        {task: person['task'], duedate: person["duedate"], category: person["category"], priority: value}
      );
  }

  function submitForm() {
    props.handleSubmit(person);
    console.log(person);
    setPerson({task: '', duedate: '', category: '', priority:''});
  }

  function updateDate(date) { 
    let currentDate = new Date(date);
    currentDate = currentDate.toLocaleDateString();
    console.log("Update date:" + currentDate);
    person.duedate = currentDate;
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
      <Calendar
        type="text" 
        name="duedate"
        id="duedate"
        //value={updateDate}
        onAccept={updateDate}
        onChange={handleChange}/>
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category"
        value={person.category}
        onChange={handleChange} />
      <label htmlFor="priority">Priority? (yes/no)</label>
      <input
        type="text"
        name="priority"
        id="priority"
        value={person.priority}
        onChange={handleChange} />
       

      <label className="date" htmlFor="date">February 22, 2023</label>
      <label className="today" htmlFor="today">Today</label>
      <label className="week" htmlFor="week">Week</label>
      <label className="calendar" htmlFor="calendar">Calendar</label>
      <input type="button" value="Submit" onClick={submitForm} />

    </form>
);

}

export default Form;