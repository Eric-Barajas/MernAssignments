import React from 'react'
import axios from 'axios';

export default props => {

    const { personId, successCallback } = props;

    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/person/' + personId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}