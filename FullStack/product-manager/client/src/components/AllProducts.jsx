import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// Named export: import { AllProducts, Name2 } from './components/AllProducts';
export const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    // const handleDelete = (idToBeDeleted) => {
    //     axios.delete(`http://localhost:8000/api/products/${idToBeDeleted}`)
    //         .then(res => {
    //             const filteredProducts = products.filter((product) => {
    //                 return product._id !== idToBeDeleted;
    //             })

    //             setProducts(filteredProducts);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    return (
        <div>
            <h2>Travel Products</h2>


            {products.map((product) => {
                const { _id, title } = product;
                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <Link to={`/products/${_id}`}> {title}</Link>
                        {/* <button
                            onClick={event => {
                                handleDelete(_id)
                            }}
                            className="btn btn-sm btn-outline-danger mx-1"
                        >
                            Delete
                        </button> */}
                    </div>
                );
            })}
        </div>
    )
};

// Only 1 default per file: import AllProducts from './components/AllProducts';
// When importing default, you can choose any name.
export default AllProducts;