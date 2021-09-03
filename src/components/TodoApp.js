import React, { Component } from 'react'
import Todos from './Todos'
import Header from './layout/Header'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'

import '../App.css'

export class TodoApp extends Component {
  state = {
    todos: [
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
  }

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
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
