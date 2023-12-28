import React from 'react';
import {Helmet} from "react-helmet";

export default function About() {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <h1 className='text-danger'>About Component</h1>
        </div>
    );
}
