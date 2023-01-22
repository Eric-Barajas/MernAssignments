const PlanetsCard = (props) => {
    const { information } = props;
    const { name, climate, terrain, surface_water, population } = information

    return (
        <div>
            <h1> {name} </h1>
            <p> Climate: {climate} </p>
            <p> Terrain: {terrain} </p>
            <p> Surface Water: {surface_water} </p>
            <p> Population: {population} </p>
        </div>
    )
}
export default PlanetsCard;
