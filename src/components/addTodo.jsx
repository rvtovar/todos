import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/todoActions'

const Form = ({addTodo, checkTodo}) => {
    const [todo, setTodo] = useState('')
    const [error, setError]= useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        let check = checkTodo(todo)

        if(check || !todo){
            setError('Please Enter a Valid Todo')
        }else{
            addTodo({
                todo,
                completed: false
            })
            setTodo('')
            setError('')
        }
    }
    return (
        <form onSubmit={onSubmit} className="ext-center border border-light p-3">
            <input 
                type="text"
                value={todo}
                onChange={
                    (e) => setTodo(e.target.value)
                }
                className="form-control mb-4"
            />
            <button className="btn btn-info btn-sm">Add Todo</button>
            {error && <p>{error}</p>}
        </form>
    )
}

const mapDispatchToProps = {addTodo}

const mapStateToProps = (state) => {
    return {
        checkTodo: (str) => state.filter(
            item => {
                return item.todo.toLowerCase() === str.toLowerCase()
            }
        ).length !== 0
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)