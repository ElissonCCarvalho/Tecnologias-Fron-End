import React from 'react'

const TaskItem = (props) => {
  return (
    <div>
      <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        { props.text }
      </label>
    </div>
    
    </div>
  )
}

export default TaskItem