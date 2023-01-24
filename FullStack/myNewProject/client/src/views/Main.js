import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => {
                setPeople(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    const createPerson = person => {
        axios.post('http://localhost:8000/api/person', person)
            .then(res => {
                setPeople([...people, res.data]);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
            <hr />
            {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
        </div>
    )
}