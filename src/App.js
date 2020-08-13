import React from 'react';
import {connect} from 'react-redux'

import Header from './components/header'
import Form from './components/addTodo'

function App(props) {
  console.log('todos', props.todos)
  return (
    <>
      <Header title="todos" />
      <Form />
      <hr/>
      {
        props.todos.map(
          item => {
            return <p key={Math.random()}>{item.todo}</p>
          }
        )
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(App);
