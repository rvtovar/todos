let defaultState = [
  {
    todo: 'Wash the Car',
    completed: false,
  },
  {
    todo: 'Run the Pit of Heresy',
    completed: true,
  },
  {
    todo: 'Run 1050 Nightfall',
    completed: false,
  }
]



function todoReducer(state=defaultState,action) {
    switch(action.type){
      case 'ADD_TODO':
        return [...state, action.todo]
      case 'DELETE':
        return state.filter(
          item => {
            return item.todo !== action.str
          }
        )
      case 'COMPLETED':
        return state.map(
          item => {
            if(item.todo === action.str){
              return {
                ...item, 
                completed: !item.completed
              }
            }
            return item
          }
        )
      default:
        return state
    }
  }
  

  export default todoReducer