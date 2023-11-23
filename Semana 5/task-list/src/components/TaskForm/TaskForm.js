import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {

  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(task)    
    setTask('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={ task }></input>
        <button type='submit' disabled={ task === '' }>Adicionar</button>
      </form>
    </div>
  )
}

export default TaskForm