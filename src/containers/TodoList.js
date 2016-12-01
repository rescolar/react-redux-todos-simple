import  { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { addTodo, toggleTodo } from '../actions/actions';

const mapStateToProps = (state) => {
  return { 
    todos: state.todos
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

