import React from 'react'
import {connect} from 'react-redux'

const Completed = ({todos}) => {
    return (
        <>
            <h4>Completed Todos</h4>
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
            item => item.completed === true
        )
    }
}

export default connect(mapStateToProps)(Completed)