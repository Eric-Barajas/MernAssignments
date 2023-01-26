import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const NewAuthor = () => {
    const [name, setName] = useState("");

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const createAuthor = async (e) => {
        e.preventDefault();
        const newAuthor = {
            name
        }

        // console.log(newAuthor);
        // swapping this out to use async/await syntax
        axios.post("http://localhost:8000/api/authors/", newAuthor)
            .then(res => {
                console.log("create console log" + res.data);
                navigate('/authors')
            }).catch(err => {
                /*
                For this catch to happen, the server needs to return an error status code.
                `?.` is optional chaining to safely access keys that may not exist.
                `errors` exists on validation errors but maybe not on other errors.
                */
                console.log(err.response);
                setErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <Link to="/authors"> Home </Link>
            <form
                onSubmit={e => { createAuthor(e) }}
            >
                <div className="form-group">
                    <label className="h6">Add a new author:</label>
                    {
                        errors?.name && (
                            <p style={{ color: 'red' }}>{errors.name?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>
                <Link className="btn btn-sm btn-outline-danger mx-1" to='/authors'> Cancel </Link>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
};

export default NewAuthor;