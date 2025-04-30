import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/dash')}>
                Dash
            </button>
            <button onClick={() => navigate('/')}>
                Landing
            </button>
        </div>
    )
}

export default Buttons