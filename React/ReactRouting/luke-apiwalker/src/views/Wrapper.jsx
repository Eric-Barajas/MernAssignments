import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlanetsCard from './PlanetsCard';
import PersonCard from './PersonCard';
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
            {
                category === "people" ?
                    <div>
                        {<PersonCard information={information} />}
                    </div> :
                    <div>
                        {<PlanetsCard information={information} />}
                    </div>
            }
        </div>
    )
}
export default Wrapper;