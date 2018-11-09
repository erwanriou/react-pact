import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions/todoActions";
class App extends Component {
  constructor(props) {
    super(props);

    this.hanldeCreateTodo = this.hanldeCreateTodo.bind(this);
  }

  hanldeCreateTodo() {
    this.props.createTodo();
  }

  render() {
    return (
      <div>
        <h1>Hello word</h1>
        <button onClick={this.hanldeCreateTodo}>Create an Action</button>

        {this.props.todo.todoList === null ? (
          <p>There is no todo list</p>
        ) : (
          <p>{this.props.todo.todoList}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { createTodo }
)(App);
