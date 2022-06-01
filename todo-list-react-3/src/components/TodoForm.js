import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {
  const [inputText, setInputText] = useState(props.edit ? props.edit.newText : '');
  const inputRef = useRef();
  const handleChange = (e) => setInputText(e.target.value)
  // %%%%%%%%%%%%%%%%%%
  console.log(inputText)

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputText,
      isComplete: false,
    })
    setInputText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit
        ? (
          <>
            <input
              className="todo-input edit"
              type="text"
              placeholder="Update your item"
              onChange={handleChange}
              ref={inputRef}
              value={inputText}
            />
            <button className="todo-button" type="Submit">Update Todo</button>
          </>
        ) : (
          <>
            <input
              className="todo-input"
              type="text"
              onChange={handleChange}
              ref={inputRef}
              value={inputText}
            />
            <button className="todo-button" type="Submit">Add Todo</button>
          </>
        )
      }

    </form>
  )
}

export default TodoForm
