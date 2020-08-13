export const addTodo = (todo={}) => {
    return {
      type: 'ADD_TODO',
      todo
    }
  }
  
 export const deleteTodo = (str="") => {
    return {
      type: 'DELETE',
      str
    }
  }
  
 export const completeTodo = (str="") => {
    return {
      type: "COMPLETED",
      str
    }
  }
  
  