import React from 'react';

const PersonCard = props => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ageIncrease: this.props.age
    //     };
    // }

    // increaseAge = () => {
    //     let countByOne = 1;
    //     this.setState({ ageIncrease: this.state.ageIncrease + countByOne })
    // }
    const { firstName, lastName, age, hairColor } = props;
    return (
        <div>
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                {/* <button onClick={this.increaseAge}> Birthday Button for {firstName} {lastName} </button> */}
            </div>
        </div>
    );
}

export default PersonCard;