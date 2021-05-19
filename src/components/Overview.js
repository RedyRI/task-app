import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faSave } from '@fortawesome/free-solid-svg-icons'
import '../Overview.css'
import Modal from './Modal'
class Overview extends Component {
  render() {
    const tasks = this.props.tasks
    const handleDelete = this.props.handleDelete
    const handleEditBtn = this.props.handleEditBtn
    const handleChangeEdit = this.props.handleChangeEdit
    const onClose = this.props.onClose
    const onOpen = this.props.onOpen
    return(
      <div>
          <table className='table  table-striped'>
          <thead>
            <tr>
              <th className='th1' scope='col'>D/M</th>
              <th className='th2' scope='col'>task</th>
              <th className='th3' scope='col' colSpan='2'>actions</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map(task => {
            return(
              <tr key={task.id}>
                <th scope='row'>{task.num}</th>
                <td >{task.toEdit ? 
                  <input 
                    className='edit-input' 
                    id={`editedTask${task.num}`}
                    value={task.text} 
                    onChange={(e) => handleChangeEdit(task.id, e)}
                    /> : 
                    task.text}</td>
                <td className='edit-btn'>
                <button 
                  className='btnn' 
                  onClick={() => handleEditBtn(task.id)}>
                  {task.toEdit ? 
                  <FontAwesomeIcon 
                  className='icon icon-save' 
                  icon={faSave} /> : 
                  <FontAwesomeIcon 
                  className='icon icon-edit' 
                  icon={faEdit} /> }  
                </button> 
                </td>
                <td className='delete-btn' >
                  {task.openModal &&
                  <Modal 
                  taskId={task.id}
                  onClose={onClose}
                  handleDelete={handleDelete}
                  />
                  }
                <button 
                  onClick={(e) => onOpen(task.id, e)} 
                  className='btnn' >
                  <FontAwesomeIcon 
                  className='icon icon-del' 
                  icon={faTrashAlt} /> 
                </button> 
                </td>
              </tr>
            )
          })}
          </tbody>
          </table>
        {/* </ul> */}
      </div>
    )
  }
}

export default Overview