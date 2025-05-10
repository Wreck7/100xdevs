import React from 'react'
import { searchQueryState, searchFilteredTodosSelector } from '../store/todosSpace';
import { useRecoilValue, useRecoilState } from 'recoil';

const SearchFeature = () => {
        const filteredTodos = useRecoilValue(searchFilteredTodosSelector);
        const [query, setQuery] = useRecoilState(searchQueryState);

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
                        </div>
                    ))}
                </div>
            </div>
        );
    };


export default SearchFeature