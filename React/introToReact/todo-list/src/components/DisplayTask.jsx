import React from 'react'

const DisplayTask = (props) => {
    const { toDoList, isComplete, handleDelete } = props;

    return (
        <>
            <div>DisplayTask</div>
            <div style={{
                margin: "0 auto",
            }}>
                {toDoList.map((todo, idx) => {
                    return (
                        <>
                            {
                                toDoList.isComplete ? <p style={{
                                    textDecoration: "line-through"
                                }}> {todo.toDo} </p> : <p> {todo.toDo} </p>
                            }
                            {/* <p key={idx} value={todo.toDo} > {todo.toDo} </p> */}
                            <input type="checkbox" checked={todo.isComplete} onChange={e => isComplete(idx)} />
                            <input onClick={(e) => { handleDelete(idx) }} className='btn btn-dark ms-3' type="submit" value='Delete' />
                        </>
                    )
                }
                )}
            </div>
        </>
    )
}

export default DisplayTask