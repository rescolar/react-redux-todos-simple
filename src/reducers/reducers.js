import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes'
import cloneDeep from 'lodash/cloneDeep'

/*
const dummyTodos = [
  { id: 0, isDone: true,  text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];
const init = dummyTodos
*/

export const todos = (todos=[], action) => {
  switch(action.type) {

    case 'ADD_TODO':
      return todos = [ ...todos, action.payload ]

    case 'TOGGLE_TODO':
      
      return cloneDeep(todos.map(t => {
        if(t.id === action.payload) {  
          t.isDone = !t.isDone;                    
          return t
        } else {
          return t;
        }
      }))
    default:
      return todos;
  }
}

/*
export const flag = (todos='INITIAL_FLAG_VALUE', action) => {
  switch (action.type) {
    case ACTION_TYPE_3:
      return action.flag
    default:
      return todos
  }
}
*/

