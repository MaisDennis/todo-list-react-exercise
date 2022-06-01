import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {
  const [inputValue, setInputValue] = useState(props.editProps ? props.editProps.text : '');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => setInputValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoData({
      id: Math.floor(Math.random() * 10000),
      text: inputValue,
      isComplete: false
    })
    // console.log(props.onSubmit)
    setInputValue('')

  }

  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        value={inputValue}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
