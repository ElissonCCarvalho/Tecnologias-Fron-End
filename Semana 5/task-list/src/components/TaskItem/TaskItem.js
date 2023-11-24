import React from 'react'

const TaskItem = ({ index, text, onDelete }) => {

  const handleClick = () => {
    onDelete(index)
  }

  return (
    <div className='p-1 mb-1 bg-body-tertiary d-flex flex-row justify-content-between align-items-center w-100'>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          { text }
        </label>
      </div>
      <button className='btn btn-outline-danger col-2' onClick={ handleClick } >Apagar</button>
    </div>
  )
}

export default TaskItem