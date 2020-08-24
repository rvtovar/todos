import React from 'react'
import {connect} from 'react-redux'
import {completeTodo} from '../actions/todoActions'

const TodoItem = ({item, completeTodo}) => {
    return (
        <div>
            <button 
                style={{
                    textDecoration: item.completed ? 'line-through': 'none',
                    borderStyle: 'none',
                    backgroundColor:'white'
                }} 
                onClick={
                    () => completeTodo(item.todo)
                }>
                {item.todo}
            </button>
        </div>
    )
}

const mapDispatchToProps = {completeTodo}

export default connect(undefined, mapDispatchToProps)(TodoItem)