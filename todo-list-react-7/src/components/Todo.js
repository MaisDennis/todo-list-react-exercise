import React, { useState } from 'react'
import {RiCloseCircleFill} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

import TodoForm from './TodoForm';

const Todo = ({todosProp, removeTodoProp, completeTodoProp, editTodoProp}) => {
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    isComplete: false
  });

  function handleEditClick(todo) {
    setEdit({
      id: todo.id,
      text: todo.text,
      isComplete: false
    })
  }

  function handleEditTodo(todo) {
    editTodoProp(edit.id, todo);
    setEdit({
      id: null,
      text: '',
      isComplete: false
    })
  }
  
  if(edit.id) return <TodoForm addTodoProp={handleEditTodo}/>
  return todosProp.map((t, index) => (
    <div key={index} style={{display:'flex', flexDirection: 'row'}}>
      <div onClick={() => completeTodoProp(t)} style={{marginRight: '10px'}}>
        {t.text}
      </div>
      <RiCloseCircleFill onClick={() => removeTodoProp(t.id)}/>
      <TiEdit onClick={() => handleEditClick(t)}/>
    </div>
  ))
}

export default Todo
