import React from 'react'

const CreateTodo = () => {
    return (
        <div>
            <input type="text" placeholder='Title' /> <br />
            <input type="text" placeholder='Description' /> <br />
            <button>Add a todo</button>
        </div>
    )
}

export default CreateTodo