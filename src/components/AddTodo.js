import React, { useState } from 'react'

export default function AddTodo(props) {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    props.addTodo(title)
    setTitle("")
  }

  return (
    <form
      className="form-container"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="input-submit"
      />
    </form>
  )
}
