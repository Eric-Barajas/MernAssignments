import React from 'react'

const DisplayTask = (props) => {
    const { toDoList, isDone, handleDelete } = props;

    return (
        <>
            <div>DisplayTask</div>
            <div style={{
                margin: "0 auto",
            }}>
                {toDoList.map((todo, idx) => {
                    return (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }} key={idx}>
                            {
                                todo.isComplete ? <p style={{ backgroundColor: 'green', textAlign: 'center' }} className="complete"> {todo.toDo} </p> : <p style={{ backgroundColor: 'red', textAlign: 'center' }}> {todo.toDo} </p>
                            }
                            {/* <p key={idx} value={todo.toDo} > {todo.toDo} </p> */}
                            <input type="checkbox" checked={todo.isComplete} onChange={e => isDone(idx)} />
                            <input onClick={(e) => { handleDelete(idx) }} className='btn btn-dark ms-3' type="submit" value='Delete' />
                        </div>
                    )
                }
                )}
            </div>
        </>
    )
}

export default DisplayTask