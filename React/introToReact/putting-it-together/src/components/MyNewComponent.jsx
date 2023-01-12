import React, { Component } from 'react';
import classes from './MyNewComponent.module.css';

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageIncrease: this.props.age
        };
    }

    increaseAge = () => {
        let countByOne = 1;
        this.setState({ ageIncrease: this.state.ageIncrease + countByOne })
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {this.state.ageIncrease}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={this.increaseAge}> Birthday Button for {firstName} {lastName} </button>
                </div>
            </div>
        );

    }
}

export default PersonComponent;