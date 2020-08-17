import React from 'react'
import {connect} from 'react-redux'

const NotCompleted = ({todos}) => {
    return (
        <>
            <h4>UnCompleted Todos</h4>
            <br/>
            {
                todos.map(
                item => {
                    return <p key={Math.random()}>{item.todo}</p>
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