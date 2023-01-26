import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllAuthors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const handleDelete = (idToBeDeleted) => {
        axios.delete(`http://localhost:8000/api/authors/${idToBeDeleted}`)
            .then(res => {
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== idToBeDeleted;
                })

                setAuthors(filteredAuthors);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div>
                <Link to="/author/new"> Add an author </Link>
                <p>We have qoutes by:</p>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author) => {
                        // destrcutruing author 
                        const { _id, name } = author;
                        return (
                            <tr key={_id} className="shadow mb-4 rounded border p-4 ">
                                <td>{name}</td>
                                <td>
                                    <Link className="btn btn-sm btn-outline-danger mx-1" to={`/author/edit/${_id}`}> Edit </Link>
                                    <button
                                        onClick={(e) => { handleDelete(_id) }}
                                        className="btn btn-sm btn-outline-danger mx-1"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors