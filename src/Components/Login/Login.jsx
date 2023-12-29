import React, {Fragment, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Joi from "joi";
import {Helmet} from "react-helmet";

export default function Login({saveUserData}) {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: '', password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorList, setErrorList] = useState([])

    function getUserData(eventInfo) {
        let myUser = {...user}
        myUser[eventInfo.target.name] = eventInfo.target.value;
        setUser(myUser)
        console.log(myUser)
    }


    function submitLoginForm(eventInfo) {
        setIsLoading(true)
        eventInfo.preventDefault();
        let validation = validateLoginForm()
        // console.log(validation) // Don't Forget To See This Variable To Can Customize Validate
        if (validation.error) setErrorList(validation.error.details); else {
            let DataBase = JSON.parse(localStorage.getItem('DataBase'))
            if (user.email === DataBase.email && user.password === DataBase.password) {
                let Data = {
                    firstName: DataBase.firstName,
                    lastName: DataBase.lastName,
                    age: DataBase.age,
                    email: DataBase.email,
                    password: DataBase.password
                }
                localStorage.setItem('Token', JSON.stringify(Data))
                saveUserData();
            }
            navigate('/home')
        }
    }

    function validateLoginForm() {
        let scheme = Joi.object({
            email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'org']}}).required(),
            password: Joi.string().pattern(/[A-Z][a-z]{6,10}/)
        })
        // return scheme.validate(user) // To Get First Error Only.
        return scheme.validate(user, {abortEarly: false}) // TO Get All Errors.
    }

    return <>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <form action="" onSubmit={submitLoginForm}>
            <label htmlFor="email">Email</label>
            <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id='email'/>
            {errorList.filter((err) => err.context.label === 'email')[0] ? <div className='alert alert-danger my-2'>
                <p className='mb-0'>{errorList.filter((err) => err.context.label === 'email')[0]?.message}</p>
            </div> : ``}
            <label htmlFor="password">Password</label>
            <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password'
                   id='password'/>
            {errorList.filter((err) => err.context.label === 'password')[0] ? <div className='alert alert-danger my-2'>
                <p className='mb-0'>{errorList.filter((err) => err.context.label === 'password')[0]?.message}</p>
            </div> : ``}
            <button className='btn btn-info'>Login</button>
            {isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : ''}
        </form>
    </>
}
