import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = ({ todosProp, completeTodoProp, removeTodoProp, editTodoProp }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    isComplete: false             
  });

  function handleEditSubmit(newTodoValue) {
    editTodoProp(edit.id, newTodoValue);
    setEdit({id:null, text:''});
  }

  if (edit.text) return (<TodoForm editProps={edit} addTodoData={handleEditSubmit}></TodoForm>)
  return todosProp.map((t, index) => (
    <div key={index}>
      <div onClick={() => completeTodoProp(t.id)}>{t.text}</div>
      <RiCloseCircleLine onClick={() => removeTodoProp(t.id)}/>
      <TiEdit onClick={() => {setEdit({id: t.id, text: t.text})}}/>      
    </div>
  ))
}

export default Todo
