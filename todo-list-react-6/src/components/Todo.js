import React, { useState } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm';

const Todo = ({ todosProp, editTodoProp, completeTodoProp, removeTodoProp }) => {
  const [editInput, setEditInput] = useState(
    {
      id: null,
      text: '',
      isComplete: false,
    }
  )

  function handleEditSubmit(newTodoValue) {
    editTodoProp(editInput.id, newTodoValue)
    setEditInput({
      id: '',
      text: '',
      isComplete: false
    })

  }

  if (editInput.id) return <TodoForm addTodoProp={handleEditSubmit} editProp={editInput} />
  return todosProp.map((t, index) => (
    <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
      <div onClick={() => completeTodoProp(t)}>
        {t.text}
      </div>
      <RiCloseCircleFill onClick={() => removeTodoProp(t)} />
      <TiEdit onClick={() => setEditInput({ id: t.id, text: t.text })} />
    </div>
  ))
}

export default Todo