import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './todoItem' //Add import for TodoITem

const NotCompleted = ({todos}) => {
    return (
        <>
            <h4 style={{
                color: 'red',
                padding: '5px'
            }}>Not Completed:</h4>
            {
                todos.map(
                item => {  // Replaced P Tag with TodoItem component
                    return <TodoItem key={Math.random()} item={item} /> 
                }
                )
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.filter(
            item => item.completed === false
        )
    }
}

export default connect(mapStateToProps)(NotCompleted)