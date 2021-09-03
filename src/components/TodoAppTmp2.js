import React, { useState } from 'react'
import Todos from './Todos'
import Header from './layout/Header'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'

import '../App.css'

const iniTodos = [
  {
    id: uuidv4(),
    title: "Setup Development Enviroment",
    completed: true
  },
  {
    id: uuidv4(),
    title: "Develope website and add content",
    completed: false
  },
  {
    id: uuidv4(),
    title: "Deploy to live server",
    completed: false
  }
  ]

export default function TodoApp() {
  const [todos, setTodos] = useState(iniTodos)

  const handleChange = (id) => {
    setTodos(
      todos.map(todo => {
      if (todo.id === id){ todo.completed = !todo.completed}
        return todo
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos({
      todos: [
        ...todos.filter(todo => {
          return todo.id !== id
        })
      ]
    })
  }

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

