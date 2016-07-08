import jQuery from 'jquery';
import React from 'react';
import CreateTodo from './CreateTodo';
import TodosList from './TodosList';



const todos = [
  {
    task: "do homework",
    isCompleted: false
  },
  {
    task: "eat dinner",
    isCompleted: true
  },
  {
    task: "learn React",
    isCompleted: false
  },
  {
    task: "play a game",
    isCompleted: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos: this.state.todos});
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
        <div>
        <h1>Todo List</h1>
    <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
  <TodosList
    todos={this.state.todos}
    toggleTask={this.toggleTask.bind(this)}
    saveTask={this.saveTask.bind(this)}
    deleteTask={this.deleteTask.bind(this)}
  />
  </div>
  );
  }
}

export default App;
