import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          name: "Laundry",
          description: "Wash, dry, and fold dirty clothes",
          completed: true
        },
        {
          id: 2,
          name: "Dishes",
          description: "Load the dishwasher and put them all away",
          completed: true
        },
        {
          id: 3,
          name: "Water Plants",
          description: "Water the aloe, basil, and succulent plants",
          completed: true
        }
      ]
    }
  }

  render() {
    const { tasks } = this.state
    return (
      <div className="App">
        <h1>To Do</h1>
        <ul>test</ul>
      </div>
    );
  }
}

export default App;
