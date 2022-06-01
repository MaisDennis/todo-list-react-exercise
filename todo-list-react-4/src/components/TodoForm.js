import React, { useState, useRef, useEffect } from 'react'


function TodoForm(props) {
  const [inputText, setInputText] = useState(props.initialEditData ? props.initialEditData.newText : '');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = e => setInputText(e.target.value)
  // console.log(inputText)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.addTodoData(
      {
        id: Math.floor(Math.random() * 10000),
        text: inputText,
        isComplete: false,
      }
    )
    setInputText('')
  }

  return (props.initialEditData 
    ?
      (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Update Todo"
              ref={inputRef}
              onChange={handleChange}
              value={inputText}
            />
            <button type='submit'>Update Todo</button>
          </form>
        </div>
      )
    :
      (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Todo"
              ref={inputRef}
              onChange={handleChange}
              value={inputText}
            />
            <button type='submit'>Add Todo</button>
          </form>
        </div>
      )
  )
}

export default TodoForm