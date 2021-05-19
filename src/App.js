import React, { Component } from 'react'
import './App.css';
import Overview from './components/Overview'
import uniqid from 'uniqid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      task: {
        text: '',
        id: '',
        num: `${(new Date()).getDate()}/${(new Date()).getMonth()}`,
        toEdit: false,
        openModal: false
      },
      tasks: [],
      isOpen: false,
    }
  }

  handleClick = e => {
    console.log('the btn was cliccked')
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.state.task.text === '') {
      return null
    }
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text : '',
        id: '',
        num: `${(new Date()).getDate()}/${(new Date()).getMonth()}`,
        toEdit: false,
        openModal: false,
      },
    })
  }

  handleChange = e => {
    this.setState({
      task: {
        text: e.target.value,
        id: uniqid(),
        num: this.state.task.num,
        toEdit: false,
        openModal: false
      },
    })
  }

  handleDelete = (id) => {
    const taskToDelete = this.state.tasks.findIndex(task => task.id === id)
    this.state.tasks.splice(taskToDelete, 1)
    this.setState({
      tasks: this.state.tasks
    })
  }
  
  handleEditBtn = (id) => {
    console.log(id);
    let taskToEdit = this.state.tasks.find(task => task.id === id)
    taskToEdit.toEdit = !taskToEdit.toEdit
    let taskToEditIndex = this.state.tasks.findIndex(task => task.id === id)
    this.state.tasks.splice(taskToEditIndex, 1, taskToEdit)
    this.setState({
      tasks: this.state.tasks
    })
  }

  onClose = (e) => {
    this.state.tasks.map(task=> {
      task.openModal = false
    })
    this.setState({
      tasks: this.state.tasks
    })
  }

  onOpen = (id, e) => {
    console.log(id);
    let taskOpenModal = this.state.tasks.find(task => task.id === id)
    const taskOpenModalIndex = this.state.tasks.findIndex(task => task.id === id)
    taskOpenModal.openModal = true;
    this.state.tasks.splice(taskOpenModalIndex, 1, taskOpenModal)
    this.setState({
      tasks: this.state.tasks
    })
  }

  handleChangeEdit = (id, e) => {
    console.log(id);
    let taskToEdit = this.state.tasks.find(task => task.id === id)
    const taskToEditIndex = this.state.tasks.findIndex(task => task.id === id)
    taskToEdit.text = e.target.value
    this.state.tasks.splice(taskToEditIndex, 1, taskToEdit)
    this.setState({
      tasks: this.state.tasks
    })
  }

  render() {
    const {task, tasks } = this.state
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label >Enter a new task: </label>
          <input 
            onChange={this.handleChange} 
            className='form-control form__inp' 
            type='text' 
            value={task.text}/>
          <button 
            onClick={this.handleClick} 
            type='submit' 
            className='btn btn-primary'>Add Task</button>
        </div>
      </form>
      <Overview 
        tasks={tasks}
        handleEditBtn={this.handleEditBtn}
        handleDelete={this.handleDelete}
        onClose={this.onClose}
        onOpen={this.onOpen}
        isOpen={this.state.isOpen}
        handleChangeEdit={this.handleChangeEdit}
        />
    </div>
  );
}
}

export default App;
