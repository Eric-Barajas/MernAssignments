import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Task from './components/Task';
import './App.css';
import DisplayTask from './components/DisplayTask';

function App() {
  //State variables
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e, newTask) => {
    e.preventDefault();
    // lines below creating a new object of the TASK. It is adding the checkbox which is
    // reflected by the isComplete. Since this is where we create the new TASK isComplete will
    // be FALSE. These liines are only needed because of the checkbox
    const newToDo = {
      toDo: newTask,
      isComplete: false
    }
    setToDoList([...toDoList, newToDo])
  }

  const isComplete = (index) => {
    const updatedTodoList = toDoList.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      }
      return todo;
    })

    setToDoList(updatedTodoList);
  }

  const handleDelete = (index) => {
    const updatedTodoList = toDoList.filter((todo, i) => {
      return i !== index && toDoList;
    })
    setToDoList(updatedTodoList);
  }

  return (
    <div className="App">
      <Container>
        <Task handleSubmit={handleSubmit} />
        <DisplayTask toDoList={toDoList} isComplete={isComplete} handleDelete={handleDelete} />
      </Container>
    </div>
  );
}

export default App;
