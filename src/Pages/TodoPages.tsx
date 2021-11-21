import React, {useEffect, useState} from 'react'
import {Todo} from "../compoments/todo";
import {TodoList} from "../compoments/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean

export const TodoPages:React.FC=()=>{
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...todos])
    }
    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    const removeHandler = (id: number) => {
        const shouldRemove = confirm('A u sure about that?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }

    }
  return <>
    <Todo onAdd={addHandler}/>
    <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
    />
  </>
}
