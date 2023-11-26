import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {

  return (
    <div >
      {
       tasks.map((t, i) => (
        <TaskItem key={i} index={i} text={t} onDelete={onDelete} />
      ))
      }
    </div>
  )
}

export default TaskList