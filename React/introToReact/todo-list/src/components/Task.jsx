import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
// import { useState } from 'react';


const Task = () => {


    return (
        <>
            <Container>
                <div>
                    <form onSubmit={'createTask'}>
                        <input type='text' placeholder='Task' />
                        <input className='btn btn-primary ms-3' type="submit" value='Add' />
                    </form>
                    <div>
                        {/* {taskList.map} */}
                        <input type='checkbox' placeholder='Task' />
                        <input className='btn btn-dark ms-3' type="submit" value='Delete' />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Task;