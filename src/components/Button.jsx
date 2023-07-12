import React from 'react';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';


const Button = () => {

    const handleClick = (toggleLogIn) => {
        // run the toggleLogIn Prop function that hs been passed down from App.jsx
        toggleLogIn();
    }

    return (
        <button onClick={handleClick}>Login/Logout</button>
    )
}

export default Button