const z = require('zod');

const addTodo = z.object({
    title: z.string(),
    description: z.string()
})
const completeTodo = z.object({
    id: z.string()
})

module.exports = {
    addTodo,
    completeTodo
}