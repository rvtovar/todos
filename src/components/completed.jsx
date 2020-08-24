import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './todoItem'

const Completed = ({todos}) => {
    return (
        <>
            <h4 style={{
                color: 'red',
                padding: '5px'
            }}>Completed:</h4>
            {
                todos.map(
                item => {
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
            item => item.completed === true
        )
    }
}

export default connect(mapStateToProps)(Completed)