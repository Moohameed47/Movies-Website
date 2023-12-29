import React from 'react';
import {Navigate} from "react-router-dom";

export default function Protected(props) {
    if (localStorage.getItem('Token'))
        return props.children;
    return (<Navigate to='/login'/>);
}