import React, {Fragment, useState} from 'react';
import {useNavigate} from "react-router-dom";
export default function Register() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: '', lastName: '', age: 0, email: '', password: '',
    })
    const [isLoading, setIsLoading] = useState(false)

    function getUserData(eventInfo) {
        let myUser = {...user}
        myUser[eventInfo.target.name] = eventInfo.target.value;
        setUser(myUser)
        console.log(myUser)
    }


    function submitRegisterForm(eventInfo) {
        setIsLoading(true)
        eventInfo.preventDefault();
        navigate('/login')
    }

    return <Fragment>
        <form action="" onSubmit={submitRegisterForm}>
            <label htmlFor="firstName">First Name</label>
            <input onChange={getUserData} type="text" className='form-control my-input my-2' name='firstName'
                   id='firstName'/>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={getUserData} type="text" className='form-control my-input my-2' name='lastName'
                   id='lastName'/>
            <label htmlFor="age">Age</label>
            <input onChange={getUserData} type="number" className='form-control my-input my-2' name='age' id='age'/>
            <label htmlFor="email">Email</label>
            <input onChange={getUserData} type="email" className='form-control my-input my-2' name='email' id='email'/>
            <label htmlFor="password">Password</label>
            <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password'
                   id='password'/>
            <button className='btn btn-info'>Register</button>
            {isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : ''}
        </form>
    </Fragment>
}
