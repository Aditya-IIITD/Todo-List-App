import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleClick = (handleAdd) => {
    handleAdd(this.state.text);
    this.setState({
      text: "",
    });
  };
  render() {
    const { handleAdd } = this.props;
    console.log(this.props);
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={() => this.handleClick(handleAdd)}>Add</button>
      </div>
    );
  }
}
