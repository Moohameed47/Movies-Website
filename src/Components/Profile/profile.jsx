import React, {Fragment} from 'react';

export default function Profile() {
    let Data = JSON.parse(localStorage.getItem('Token'))
    return <Fragment>
        <h1>Email: {Data.email}</h1>
        <h1>Name: {Data.firstName} {Data.lastName}</h1>
        <h1>Age: {Data.age}</h1>
    </Fragment>

}