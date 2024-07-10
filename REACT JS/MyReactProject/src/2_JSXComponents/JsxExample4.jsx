/* eslint-disable no-unused-vars */
import React from 'react'
import Profile from './ExtraCom/Profile';
import Login from './ExtraCom/Login';

export default function JsxExample4() {
    const isLoggedIn = true;

    if(isLoggedIn)
    {
        return <Profile/>;
    }
    else
    {
        return <Login/>;
    }
}
