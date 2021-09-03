import React from 'react'

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "blue",
    textDecoration: "line-through"
  }
  const { completed, id, title } = props.todo
  return (
    <div>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={()=>props.handleChange(id)}
        />
      <span style={completed ? completedStyle : null} >
        {title}
      </span>
        <button
          className="btn-style"
          onClick={()=>props.deleteTodo(id)}
        >
          &times;
        </button>
      </li>
    </div>
  )
}

export default TodoItem
