import React from 'react';


const toDoList = [
  {
    task: 'Finish React project',
    // id:
    completed: false
  },
  {
    task: 'Work on Single Variable Calculus homework',
    completed: false
  },
  {
    task: 'Attend project meetup',
    completed: false
  },
  {
    task: 'Read React.js documentation',
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
