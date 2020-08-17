import React from 'react';
import {connect} from 'react-redux'

import Header from './components/header'
import Form from './components/addTodo'
import Completed from './components/completed'
import NotCompleted from './components/notCompleted'

function App(props) {
  console.log('todos', props.todos)
  return (
    <>
      <Header title="todos" />
      <Form />
      <hr/>
      <Completed />
      <NotCompleted />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(App);
