import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditAuthor = () => {
    const [name, setName] = useState("");

    const [errors, setErrors] = useState(null);

    // url route param matching `:id`.
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const {
                    name
                } = res.data
                console.log(typeof id);
                setName(name);
            }).catch(err => {
                console.log(err);
                navigate('/errors')
            })
    }, [navigate, id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const editedAuthor = {
            name
        }

        axios.put(`http://localhost:8000/api/authors/${id}`, editedAuthor)
            .then(res => {
                console.log(res);
                navigate('/authors');
            }).catch(err => {
                console.log(err.response);
                /*
                For this catch to happen, the server needs to return an error status code.
                `?.` is optional chaining to safely access keys that may not exist.
                `errors` exists on validation errors but maybe not on other errors.
                */
                setErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <Link to="/authors"> Home </Link>
            <form
                onSubmit={e => { handleUpdate(e) }}
            >
                <div className="form-group">
                    <label className="h6">Edit this author:</label>
                    {
                        errors?.name && (
                            <p style={{ color: 'red' }}>{errors.name?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        type="text" className="form-control" value={name}
                    />
                </div>
                <Link className="btn btn-sm btn-outline-danger mx-1" to='/authors'> Cancel </Link>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}

export default EditAuthor