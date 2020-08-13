import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/todoActions'

const Form = ({addTodo, checkTodo}) => {
    const [todo, setTodo] = useState('')
    const [error, setError]= useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        let check = checkTodo(todo)

        if(check.length !== 0){
            setError('That Todo exist')
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
        <form onSubmit={onSubmit} >
            <input 
                type="text"
                value={todo}
                onChange={
                    (e) => setTodo(e.target.value)
                }
            />
            <button>Add Todo</button>
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
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)