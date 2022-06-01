import React, { useState, useEffect, useRef } from 'react'

export default function TodoForm(props) {
  const [inputValue, setInputValue] = useState(props.edit ? props.edit.newText : '');
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus())

  const handleChange = e => setInputValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputValue,
      isComplete: false
    });
    setInputValue('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo-input edit"
            type="text"
            placeholder="Update your item"
            onChange={handleChange}
            ref={inputRef}
            value={inputValue}
          />
          <button className="todo-button" type="submit">Update Todo</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            type="text"
            placeholder="Add a todo"
            onChange={handleChange}
            ref={inputRef}
            value={inputValue}
          />
          <button className="todo-button" type="submit">Add Todo</button>
        </>
      )}

    </form>

  )
}
