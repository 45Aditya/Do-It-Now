import React, {createContext, useContext} from "react"

export const ToDoContext = React.createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = ToDoContext.Provider 

export const useTodo = () => {
    return useContext(ToDoContext)
}