import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {  
  return (
    <div >
      {
       props.tasks.map((t, i) => (
        <TaskItem key={i} text={t} />
      ))
      }
    </div>
  )
}

export default TaskList