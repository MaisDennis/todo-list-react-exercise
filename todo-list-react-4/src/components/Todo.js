import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti';

import TodoForm from './TodoForm';

const Todo = ({ todosProp, completeTodoProp, editTodoProp, deleteTodoProp }) => {
  const [edit, setEdit] = useState({
    id: null,
    newText: '',
    isComplete: false,
  })

  // receives props.addTodoData as newData, but ignores the 'id' and uses edit.id
  const handleEdit = (newData) => {
    editTodoProp(edit.id, newData)
    setEdit({id: null, newText:''})
    console.log(newData)
  }

  const handleEditClick = (t) => setEdit({ id: t.id, newText: t.text })

  if (edit.id !== null) {
    return <TodoForm initialEditData={edit} addTodoData={handleEdit}></TodoForm>
  }

  return todosProp.map((t, index) => (
    <>
      <div key={index} onClick={() => completeTodoProp(t.id)}>
        {t.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => deleteTodoProp(t.id)} />
        <TiEdit onClick={() => handleEditClick(t)} />
      </div>
    </>
  ))
}

export default Todo
