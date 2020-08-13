import {createStore} from 'redux'
import todoReducer from '../reducers/todoReducers'

function newStore() {
    return createStore(todoReducer)
}

export default newStore