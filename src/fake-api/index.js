import { createServer, Model } from 'miragejs'

export const setupServer = () => {
    createServer({
        models: {
            todos: Model
        },
        routes() {
            this.get('/api/todos', (schema) => schema.todos.all())

            this.post('/api/todos', (schema, request) => {
                const payload = JSON.parse(request.requestBody)

                return schema.todos.create(payload)
            })

            this.post('api/updateTodo', (schema, request) => {
                const payload = JSON.parse(request.requestBody)

                const currentToo = schema.todos.find(payload)

                currentToo.update({ completed: !currentToo.completed })
                return currentToo
            })
        }
    })
} 