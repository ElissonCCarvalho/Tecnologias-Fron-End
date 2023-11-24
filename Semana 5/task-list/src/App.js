import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  const [tasks, setTasks] = useState(['Tarefa 1', 'Tarefa 2', 'Ler a Bíblia', 'Estudar React', 'Tarefa 3', 'Tarefa 4', 'Estudar Android',]);

  const addTask = (name) => {
    setTasks(old => { return [...old, name] })
  }

  const deleteTask = (index) => {
    console.log(index)
    setTasks(old => old.filter((_, i) => i !== index));
  };
  
  return (
    <div className='app container-sm d-flex flex-column align-items-center pt-3'>
      <div class="w-100">
        <p className='h2 text-center my-3'>Lista de Tarefas</p>
        <TaskForm onAdd={ addTask } />
        <TaskList tasks={ tasks } onDelete={ deleteTask } />
      </div>
    </div>
  );
}

export default App;
