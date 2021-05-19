import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal(props) {

  return ReactDOM.createPortal(
  <div className='Modal'>
    <div className='Modal__container'>
      <button onClick={props.onClose} className='Modal__close-button'>x</button>
      <div>
      <p className='delete-msg'>You are about to delete a task</p>
      <button onClick={props.onClose} className='btn btn-primary mr-4'> cancel </button>
      <button onClick={() => props.handleDelete(props.taskId)} className='btn btn-danger mr-4'> Delete </button>
      </div>
    </div>
  </div>
  ,
  document.getElementById('modal'))
}

export default Modal