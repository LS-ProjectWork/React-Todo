import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from  './components/TodoComponents/TodoForm'


const todos = [
  {
    task: 'Finish React project',
    id: Date.now(),
    completed: true
  },
  {
    task: 'Work on Single Variable Calculus homework',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Attend project meetup',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Read React.js documentation',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDoList: todos,
      formEvent: '',
    }
  }

  handleChange = event => {
    this.setState({formEvent: event.target.value})
  }

  handleAdd = event => {
    event.preventDefault()
    this.setState({toDoList: this.state.toDoList.concat({task: this.state.formEvent, id: Date.now(), completed: false}), formEvent: ''})
  }

  handleClear = event => {
    event.preventDefault()
    this.setState({toDoList: this.state.toDoList.filter(todo => {
      if(todo.completed){
        return false;
      } else {
        return true;
      }
    })})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo todo={todos[0]} />
        <TodoList todos={this.state.toDoList} />
        <TodoForm inputValue={this.state.formEvent} handleChange={this.handleChange} handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
