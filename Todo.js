import { Component } from "react";

export class Todo extends Component {
  render() {
    const { todo, handleRemove, id } = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={() => handleRemove(todo.text, id)}>x</button>
      </div>
    );
  }
}
