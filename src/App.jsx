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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm -8">
            <Form />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-5">
            <NotCompleted />
          </div>
          <div className="col-lg-3 col-sm-5">
              <Completed />
            </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(App);
