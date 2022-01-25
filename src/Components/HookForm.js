import React, { useState } from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    // Valications
    const [errFirstName, setErrFirstName] = useState("");
    const [errlastName, setErrLastName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordLengthError, setPasswordLengthError] = useState("");
    const [passwordConfLengthError, setPasswordConfLengthError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    function createUser(e) {
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        console.log("Welcome", newUser);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfpassword("");

        setHasBeenSubmitted(true);
    }

    // Validation functions ********
    let hasErrors = false

    const handleConfPassword = (e) => {
        passwordConfLength(e)
        passwordConfirmation(e)
    }

    const passwordConfirmation = (e) => {
        setConfpassword(e.target.value);
        if(e.target.value !== password){
            setPasswordError("Password does not match. Please try again.");
        }else {
            setPasswordError("");
        }
    }

    const passwordLength = (e) => {
        setPassword(e.target.value);
        if(e.target.length < 8){
            setPasswordLengthError("Password must be at leaset 8 characters long.");
        }else{
            setPasswordLengthError("")
        }
    }
    const passwordConfLength = (e) => {
        setConfpassword(e.target.value);
        if(e.target.length < 8){
            setPasswordConfLengthError("Password must be at leaset 8 characters long.");
        }else{
            setPasswordConfLengthError("")
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setErrFirstName("First Name must be at least 2 characters long.");
        }else{
            setErrFirstName("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setErrLastName("Last Name must be at least 2 characters longs.");
        }else{
            setErrLastName("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setErrEmail("Email must be at least 5 characters long.");
        }else{
            setErrEmail("");
        }
    }

    

    return(
        <div>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                    <h2>Thank you for submitting your information!</h2>:
                    <h2>Welcome, Please submit your information.</h2>
                }
                <div className='mb-3'>
                    <label>First Name:</label>
                    <input type="text" value={ firstName } className='formControl'  onChange={ handleFirstName} />
                    {
                        errFirstName ? 
                        <p>{ errFirstName } </p>:
                        null
                    }
                    {
                        errFirstName ? 
                        hasErrors = true:
                        null
                    }
                </div>
                <div className='mb-3'>
                    <label>Last Name:</label>
                    <input type="text" value={ lastName } className='formControl' onChange={ handleLastName} />
                    {
                        errlastName ?
                        <p>{ errlastName } </p> :
                        null
                    }
                    {
                        errlastName ?
                        hasErrors = true:
                        null
                    }
                </div>
                <div className='mb-3'>
                    <label>Email:</label>
                    <input type="text" value={ email } className='formControl' onChange={ handleEmail}/>
                    {
                        errEmail ?
                        <p>{ errEmail }</p>:
                        null
                    }
                    {
                        errEmail ?
                        hasErrors = true:
                        null
                    }
                </div>
                <div className='mb-3'>
                    <label>Password:</label>
                    <input type="password" value={ password } className='formControl' onChange = { passwordLength}/>
                    {
                        passwordLengthError ?
                        <p>{ passwordLengthError }</p>:
                        null
                    }
                    {
                        passwordLengthError ?
                        hasErrors = true:
                        null
                    }
                </div>
                <div className='mb-3'>
                    <label>Confirm Password:</label>
                    <input type="password" value={ confpassword} className='formControl' onChange={ handleConfPassword}/>
                    {
                        passwordError ?
                        <p>{ passwordError } </p>:
                        null
                    }
                    {
                        passwordError ?
                        hasErrors = true:
                        null
                    }
                    {
                        passwordConfLengthError ?
                        <p>{ passwordConfLengthError} </p>:
                        null
                    }
                    {
                        passwordConfLengthError ?
                        hasErrors = true:
                        null
                    }
                </div>
                    {/* <input type="submit" value="Create User"/> */}
                {
                    hasErrors ?
                    <input type="submit" value="Create User" disabled/>:
                    <input type="submit" value="Create User"/>
                }
            </form>

            <div>
                <p>First name: { firstName }</p>
                <p>Last name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
            </div>

        </div>
    )
}

export default HookForm;