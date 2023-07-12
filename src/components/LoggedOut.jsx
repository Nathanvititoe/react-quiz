



import React from 'react'
import Button from './Button'

const LoggedOut = () => {


    return (
        <>
            <h1>Logged out comp...</h1>
            <Button onToggle={toggleLogIn}/>
        </>
    )
}

export default LoggedOut
