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
    <div className='p-1 mb-1 bg-body-tertiary w-100'>
      <form className='d-flex flex-row justify-content-between align-items-center gap-2 w-100' onSubmit={handleSubmit}>
        <div className="w-100">
          <input type="text" className="form-control w-100" onChange={handleChange} value={ task } placeholder="Adicione uma nova tarefa" />
        </div>
        
        <button class="btn btn-outline-success col-2" type="submit"  disabled={ task === '' }>Adicionar</button>
      </form>
    </div>
  )
}

export default TaskForm