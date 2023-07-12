



import React from 'react'
import Button from './Button'

const LoggedIn = () => {

    return (
        <>
            <h1>Logged in</h1>
            <Button onToggle={toggleLogIn}/>
        </>
    )
}

export default LoggedIn