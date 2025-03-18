import React from 'react'
import { useState } from 'react'
import Header from './Header'

const HeaderWithButton = () => {
    const [title, setTitle] = useState('karthik')
    function updateTitle() {
        setTitle(Math.random());
    }
    return (
        <>
            <button onClick={updateTitle}>update 1st title</button>
            <Header title={title} />
        </>
    )
}

export default HeaderWithButton