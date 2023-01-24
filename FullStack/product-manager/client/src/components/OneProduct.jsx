import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const OneProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    // const handleDelete = () => {
    //     axios.delete(`http://localhost:8000/api/products/${id}`)
    //         .then(res => {
    //             navigate('/products');
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    if (product === null) {
        return null;
    }

    // We can only safely use the data to render and destructure now since
    // we checked it's not null.
    const { title, price, description } = product;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h2>{title}</h2>
            <p>${price}</p>
            <p>{description}</p>
            {/* <button
                onClick={handleDelete}
                className="btn btn-sm btn-outline-danger mx-1"
            >
                Delete
            </button> */}
        </div>
    );
};

export default OneProduct;