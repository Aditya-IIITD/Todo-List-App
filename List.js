import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const { todos, handleRemove } = this.props;
    return (
      <div className="list">
        {todos.map((item, index) => (
          <Todo
            todo={item}
            handleRemove={handleRemove}
            id={index}
            key={index}
          />
        ))}
      </div>
    );
  }
}
