import React, { Component } from 'react'
import Todos from './Todos'
import Header from './layout/Header'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'

import '../App.css'
const LOCAL_STORAGE_KEY = 'todos.todos'

export class TodoApp extends Component {
  
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup Development Enviroment",
        completed: true
      }
    ]
  }

  componentDidMount() {
    const todoJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (todoJSON != null) this.setState({todos: JSON.parse(todoJSON)})
  }

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
      if (todo.id === id){ todo.completed = !todo.completed}
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id
        })
      ]
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.todos))
  }

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos}
          handleChange={this.handleChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

export default TodoApp
