import React from 'react'

const DisplayTask = () => {
    return (
        <>
            <div>DisplayTask</div>
            <div>
                {/* {taskList.map} */}
                <input type='checkbox' placeholder='Task' />
                <input className='btn btn-dark ms-3' type="submit" value='Delete' />
            </div>
        </>
    )
}

export default DisplayTask