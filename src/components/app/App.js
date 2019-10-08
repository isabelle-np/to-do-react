import React, { Component } from "react";
import "./App.css";
import ListItem from '../tasklist/ListItem';
import _ from "lodash";
import Footer from '../footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          name: "Laundry",
          description: "Wash, dry, and fold dirty clothes",
          completed: false
        },
        {
          id: 2,
          name: "Dishes",
          description: "Load dishwasher and put away dishes",
          completed: false
        },
        {
          id: 3,
          name: "Water Plants",
          description: "Water the aloe and basil plants",
          completed: false
        }
      ]
    };
  }

  handleOnClick = id => {
    const tasks = _.cloneDeep(this.state.tasks);

    for (let task of tasks) {
      if (task.id === id) {
        task.completed = !task.completed;
        break;
      }
    }

    this.setState({ tasks })
  };

  render() {
    const { tasks } = this.state;
    
    return (
      <div className="App">
        <h1>To Do</h1>
        <p>Click on completed tasks to mark them as done</p>
        <ul>
          {tasks.map(task => (
            <ListItem 
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              description={task.description}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </ul>
        <Footer/>
      </div>
    );
  }
}

export default App;
