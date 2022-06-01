import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    newText: '',
    isComplete: false,
  })

  const submitUpdate = (newData) => {
    console.log(newData)
    updateTodo(edit.id, newData);
    setEdit({ id: null, newText: '' })
  }

  if (edit.id)
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>

  return todos.map((t, index) => (
    <div className={t.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={t.id} onClick={() => completeTodo(t.id)}>{t.text}</div>
      <div className="icons">
        <RiCloseCircleLine className='delete-icon' onClick={() => removeTodo(t.id)} />
        <TiEdit className='edit-icon' onClick={() => setEdit({ id: t.id, newText: t.text })} />
      </div>
    </div>
  ));
}

export default Todo
