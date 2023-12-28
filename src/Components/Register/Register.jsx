import React, {Fragment, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Joi from "joi";
import {Helmet} from "react-helmet";

export default function Register() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: '', lastName: '', age: 0, email: '', password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorList, setErrorList] = useState([])

    function getUserData(eventInfo) {
        let myUser = {...user}
        myUser[eventInfo.target.name] = eventInfo.target.value;
        setUser(myUser)
        console.log(myUser)
    }


    function submitRegisterForm(eventInfo) {
        setIsLoading(true)
        eventInfo.preventDefault();
        let validation = validateRegisterForm()
        // console.log(validation) // Don't Forget To See This Variable To Can Customize Validate
        if (validation.error) setErrorList(validation.error.details)
        else
            navigate('/login')
    }

    function validateRegisterForm() {
        let scheme = Joi.object({
            firstName: Joi.string().min(3).max(15).required(),
            lastName: Joi.string().min(3).max(15).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'org']}}).required(),
            password: Joi.string().pattern(/[A-Z][a-z]{6,10}/)
        })
        // return scheme.validate(user) // To Get First Error Only.
        return scheme.validate(user, {abortEarly: false}) // TO Get All Errors.
    }

    return <>
        <Helmet>
            <title>Register</title>
        </Helmet>
        <form action="" onSubmit={submitRegisterForm}>
            <label htmlFor="firstName">First Name</label>
            <input onChange={getUserData} type="text" className='form-control my-input my-2' name='firstName'
                   id='firstName'/>
            {errorList.filter((err) => err.context.label === 'firstName')[0] ? <div className='alert alert-danger my-0'>
                <p className='mb-0'>{errorList.filter((err) => err.context.label === 'firstName')[0]?.message}</p></div> : ''}
            <label htmlFor="lastName">Last Name</label>
            <input onChange={getUserData} type="text" className='form-control my-input my-2' name='lastName'
                   id='lastName'/>
            {errorList.filter((err) => err.context.label === 'lastName')[0] ? <div className='alert alert-danger my-2'>
                <p className='mb-0'>{errorList.filter((err) => err.context.label === 'lastName')[0]?.message}</p></div> : ``}
            <label htmlFor="age">Age</label>
            <input onChange={getUserData} type="number" className='form-control my-input my-2' name='age' id='age'/>
            {errorList.filter((err) => err.context.label === 'age')[0] ? <div className='alert alert-danger my-2'>
                <p className='mb-0'>{errorList.filter((err) => err.context.label === 'age')[0]?.message}</p></div> : ``}
            <label htmlFor="email">Email</label>
            <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id='email'/>
            {errorList.filter((err) => err.context.label === 'email')[0] ? <div className='alert alert-danger my-2'>
                <p className='mb-0'>{errorList.filter((err) => err.context.label === 'email')[0]?.message}</p></div> : ``}
            <label htmlFor="password">Password</label>
            <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password'
                   id='password'/>
            {errorList.filter((err) => err.context.label === 'password')[0] ? <div className='alert alert-danger my-2'>
                <p className='mb-0'>{errorList.filter((err) => err.context.label === 'password')[0]?.message}</p></div> : ``}
            <button className='btn btn-info'>Register</button>
            {isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : ''}
        </form>
    </>
}
