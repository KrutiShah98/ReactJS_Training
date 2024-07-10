// eslint-disable-next-line no-unused-vars
import React from 'react'
import Profile from './ExtraCom/Profile';
import Login from './ExtraCom/Login';

export default function JsxExample5() 
{
    const isLoggedIn = true;
    let element;
    if(isLoggedIn)
    {
        element =  <Profile/>;
    }
    else
    {
        element =  <Login/>;
    }
    return element;
}
