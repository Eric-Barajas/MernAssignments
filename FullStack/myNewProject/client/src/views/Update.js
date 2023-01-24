import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {

    const history = useHistory()
    const { id } = useParams();
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, []);

    const updatePerson = person => {
        axios.put('http://localhost:8000/api/person/' + id, person)
            .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    <DeleteButton personId={person._id} successCallback={() => history.push("/")} />
                </>
            )}
        </div>
    )
}

export default Update;