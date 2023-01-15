import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Task from './components/Task';
import './App.css';

function App() {
  //State variables
  const [toDoList, setToDoList] = useState([]);
  return (
    <div className="App">
      <Container>
        <Task />
      </Container>
    </div>
  );
}

export default App;
