import React from 'react'
import { searchQueryState, searchFilteredTodosSelector, todosSpace } from '../store/todosSpace';
import { useRecoilValue, useRecoilState } from 'recoil';

const SearchFeature = () => {
    const filteredTodos = useRecoilValue(searchFilteredTodosSelector);
    const [query, setQuery] = useRecoilState(searchQueryState);
    const [todos, setTodos] = useRecoilState(todosSpace);
    // const [filteredTodos, setFilteredTodos] = useRecoilState(searchFilteredTodosSelector)

    const toggleTodoDone = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
        console.log(todos)
    };
    return (
        <div>
            search: <input
                type="text"
                placeholder="Search todos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div>
                {filteredTodos.map(todo => (
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <button onClick={() => toggleTodoDone(todo.id)}
                        >{todo.done ? "Done" : "Undone"}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SearchFeature