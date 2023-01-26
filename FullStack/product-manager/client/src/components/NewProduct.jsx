import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const createProduct = async (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }

        // console.log(newProduct);
        // swapping this out to use async/await syntax
        axios.post("http://localhost:8000/api/products/", newProduct)
            .then(res => {
                console.log("create console log" + res.data);
                navigate(`/product/${res.data._id}`)
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
            <h3 className="text-center">New Product</h3>

            <form
                onSubmit={e => { createProduct(e) }}
            >
                <div className="form-group">
                    <label className="h6">Title</label>
                    {
                        errors?.title && (
                            <p style={{ color: 'red' }}>{errors.title?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        type="text" className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Price</label>
                    {
                        errors?.price && (
                            <p style={{ color: 'red' }}>{errors.price?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                        type="number" step=".01"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Description</label>
                    {
                        errors?.description && (
                            <p style={{ color: 'red' }}>{errors.description?.message}</p>
                        )
                    }
                    <textarea
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                    ></textarea>
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
};

export default NewProduct;