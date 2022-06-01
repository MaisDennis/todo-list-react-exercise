import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {

  const [inputValue, setInputValue] = useState();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  })

  function handleSubmit(e) {
    e.preventDefault();

    props.addTodoProp({
      id: Math.floor( Math.random() * 10000),
      text: inputValue,
      isComplete: false
    })
    if (inputValue) {
      inputRef.current.value = '';
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
