const AllPokémon = ({ pokémon, displayPoke }) => {

    return (
        <div>
            <input onClick={displayPoke} type="submit" value="Fetch Pokémon" />

            {pokémon.map((poke, idx) => (
                <div key={idx}>
                    <h4>
                        {poke.name}
                    </h4>
                    <p>
                        {poke.url}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default AllPokémon;

