import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {

  const [ inputValue, setInputValue] = useState( props.editProp ? props.editProp.text : '')
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await setInputValue(e.target.value)
    props.addTodoProp({
      id: 'BR'+Math.floor(Math.random() * 10000),
      text: inputValue,
      isComplete: false
    })
    if (inputRef.current) {inputRef.current.value = ''}
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        ref = {inputRef}
        onChange={(e) => {setInputValue(e.target.value)}}
        value={inputValue}
      />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm
