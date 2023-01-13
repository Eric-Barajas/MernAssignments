import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstNameError] = useState("");
    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");

    //COMBINED STATE SETTING IT UP (Incomplete)
    // const [user, setUser] = useState({
    //     firstname: "",
    //     lastname: "", 
    //     email: "",
    //     password: "",
    //     confirmpassword: "",
    // })

    // const [usererrors, setUserErrors]

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname, lastname, email, password, confirmpassword };
    //     console.log("Welcome", newUser);
    // };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError(" First Name is required ");
        } else if (e.target.value.length < 3) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError(" Last Name is required ");
        } else if (e.target.value.length < 3) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError(" Field must be at least 5 characters ");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError(" Field must be at least 8 characters ");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError(" Field must be at least 8 characters ");
        }
        else if (e.target.value !== password) {
            setConfirmPasswordError(" Passwords must match! ");
        }
        else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {
                        firstnameError ?
                            <p style={{ color: 'red' }}>{firstnameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {
                        lastnameError ?
                            <p style={{ color: 'red' }}>{lastnameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} />
                    {
                        confirmpasswordError ?
                            <p style={{ color: 'red' }}>{confirmpasswordError}</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h4> Your Form Data</h4>
                <p> First Name: {firstname} </p>
                <p> Last Name: {lastname} </p>
                <p> Email Address: {email} </p>
                <p> Password: {password} </p>
                <p> Confirm Password: {confirmpassword} </p>
            </div>
        </div>
    );
};

export default UserForm;
