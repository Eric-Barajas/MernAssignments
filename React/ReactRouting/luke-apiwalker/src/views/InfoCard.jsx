import 

const displayInformation = (props) => {
    if (category == "people") {
        return (
            <div>
                <h1> {information.name} </h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1> {information.terrain} </h1>
            </div>
        )
    }
    return (
        <h1>yes</h1>
    )
}

export default DisplayInformation;