import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" },
      ],
    };
  }
  handleAdd = (task) => {
    const { todos } = this.state;
    if (task.trim().length === 0) return;
    todos.push({ text: task });
    this.setState({
      todos,
    });
  };

  handleRemove = (todo) => {
    const { todos } = this.state;
    let index = todos.indexOf(todo);
    for (index in todos) {
      if (todos[index].text === todo) {
        break;
      }
    }
    todos.splice(index, 1);
    this.setState({
      todos,
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        <Form handleAdd={this.handleAdd} />
        <List todos={todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
