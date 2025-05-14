import { atom } from "recoil"
import { selector } from "recoil";

const LOCAL_STORAGE_KEY = 'todos';

// export const todosSpace = atom({
//     key: 'todosSpace',
//     default: []
// })

export const todosSpace = atom({
    key: 'todosSpace',
    default: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet(newTodos => {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
            });
        },
    ],
});

export const searchQueryState = atom({
    key: 'searchQueryState',
    default: '', // default empty search
});

export const searchFilteredTodosSelector = selector({
    key: 'searchFilteredTodosSelector',
    get: ({ get }) => {
        const todos = get(todosSpace);
        const query = get(searchQueryState).toLowerCase().trim();
        if (!query) {
            return todos;
        } else {
            return todos.filter(todo =>
                todo.title.toLowerCase().includes(query) ||
                todo.description.toLowerCase().includes(query)
            );
        }
    },
});