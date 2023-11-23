import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';

const App = () => {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    setTasks(old => { return [...old, name] })
  }

  return (

    <div>
      <TaskForm onAdd={ addTask } />
      <TaskList tasks={ tasks }/>
    </div>
  );  
}

export default App;
