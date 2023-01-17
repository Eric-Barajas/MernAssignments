import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { useState } from 'react';


const Task = (props) => {
    const { handleSubmit } = props;
    const [newTask, setNewTask] = useState("");

    const submitTask = (e) => {
        e.preventDefault();
        handleSubmit(e, newTask);
        setNewTask('');
    }

    return (
        <>
            <Container>
                <div>
                    <form onSubmit={(e) => submitTask(e, newTask)}>
                        <input onChange={(e) => {
                            setNewTask(e.target.value);
                        }} type='text' placeholder='Task' value={newTask} />
                        <input className='btn btn-primary ms-3' type="submit" value='Add' />
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Task;