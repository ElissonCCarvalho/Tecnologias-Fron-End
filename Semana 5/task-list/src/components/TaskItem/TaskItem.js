import React from 'react'

const TaskItem = ({ index, text, onDelete }) => {

  const handleClick = () => {
    onDelete(index)
  }

  const lowercasedText = text.toLowerCase();
  
  const bgColor = lowercasedText.includes('estudar') || lowercasedText.includes('ler') ? 'bg-primary' : 'bg-body-tertiary';
  const textColor = bgColor === 'bg-primary' ? 'text-light' : 'text-secondary'

  console.log(textColor)

  return (
    <div className={`p-1 mb-1 ${bgColor} d-flex flex-row justify-content-between align-items-center w-100 rounded`}>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className={`form-check-label ${ textColor }`} htmlFor="flexCheckDefault">
          { text }
        </label>
      </div>
      <button className='btn btn-outline-dark btn-sm col-2' onClick={ handleClick } >Apagar</button>
    </div>
  )
}

export default TaskItem