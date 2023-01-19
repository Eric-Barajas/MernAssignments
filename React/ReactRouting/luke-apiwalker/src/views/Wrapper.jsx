import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import People from './views/People';
// import Planets from './views/Planets';
// import NotFound from './views/NotFound';
import axios from 'axios';

const Wrapper = (props) => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(null);
    const [information, setInformation] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log("test")
        e.preventDefault()
        axios.get(`https://swapi.dev/api/${category}/${id}/`).then(res => {
            setInformation(res.data)
        }).catch(err => {
            console.log(err.response.status)
            if (err.response.status === 404) {
                navigate("/error")
            }
        })
    }

    const displayInformation = (props) => {
        if (category === "people") {
            return (
                <div>
                    <h1> {information.name} </h1>
                    <p> Height: {information.height} cm</p>
                    <p> Mass: {information.mass} kg</p>
                    <p> Hair Color: {information.hair_color}</p>
                    <p> Skin Color: {information.skin_color}</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1> {information.name} </h1>
                    <p> Climate: {information.climate} </p>
                    <p> Terrain: {information.terrain} </p>
                    <p> Surface Water: {information.surface_water} </p>
                    <p> Population: {information.population} </p>
                </div>
            )
        }
    }

    return (
        <div className="form">
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label> Search for: </label>
                    <select onChange={(e) => setCategory(e.target.value)} name="category" >
                        <option value="people"> People </option>
                        <option value="planets"> Planets </option>
                    </select>
                    <label> ID: </label>
                    <input onChange={(e) => setId(e.target.value)} type="number" name="id" />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <div>
                {displayInformation()}
            </div>
        </div>
    )
}
export default Wrapper;