import React from 'react'
import { useState, useEffect } from 'react'

const Input = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [interests, setInterests] = useState('');
    const [socials, setSocials] = useState('');

    async function postData() {
        const data = {
            name,
            description,
            interests: interests.split(',').map(interest => interest.trim()),
            socials: socials.split(',').map(social => social.trim())
        };
        const response = await fetch('http://localhost:3002/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
    }

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={postData}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>interests (comma separated):</label>
                    <input
                        type="text"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                    />
                </div>
                <div>
                    <label>socials (comma separated):</label>
                    <input
                        type="text"
                        value={socials}
                        onChange={(e) => setSocials(e.target.value)}
                    />
                </div>
                <button type="submit">Create User</button>
            </form>
            <br />
        </div>
    )
}

export default Input