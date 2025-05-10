import { atom } from "recoil"
import { selector } from "recoil";

export const todosSpace = atom({
    key: 'todosSpace',
    default: []
})

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