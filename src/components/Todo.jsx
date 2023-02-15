import { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import './todo.css'

export default function Todo () {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleValue = (str) => {
    setValue(str)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    const newTodo = {
      completed: false,
      id: Math.floor(Math.random() * 1000),
      text: value
    }
    setTodos([...todos, newTodo])
    setValue('')
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <main>
      <h2>TODO List</h2>
      <TodoForm handleSubmit={handleSubmit} handleValue={handleValue} value={value} />

      <div>
        <ul>
          {todos.map(todo =>
            <TodoItem
              todo={todo}
              key={todo.id}
              handleDeleteTodo={handleDeleteTodo}
              handleCompleted={handleCompleted}
            />)}
        </ul>
      </div>
    </main>
  )
}
