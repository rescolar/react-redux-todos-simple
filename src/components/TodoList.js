import React from 'react'
import Todo from '../containers/Todo'
import { addTodo, toggleTodo } from '../actions/actions';
/*
const TodoList = (props) => (
  <div>Hola</div>
)

export default TodoList
*/

/*
export function TodoList(props) {
  const { todos } = props;
  return (
    <div className='todo'>
    	Hola
    </div>
  );
}
*/

/*
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Hola</div>
    );
  }
}
*/



const TodoList = ( { todos, toggleTodo, addTodo }) => {
	//const { todos, toggleTodo, addTodo } = props;
	//console.log(addTodo)
	const onSubmit = (event) => {
	    const input = event.target;
	    const text = input.value;
	    const isEnterKey = (event.which == 13);
	    const isLongEnough = text.length > 0;

	    if(isEnterKey && isLongEnough) {
	      input.value = '';
	      addTodo(text);
	    }
  	};
  	console.log('TodoList-todos: ', todos)
  const toggleClick = id => event => toggleTodo(id);
  return (
    <div className='todo'>
      <input type='text'
             className='todo__entry'
             placeholder='Add todo'
             onKeyDown={onSubmit} />
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.id}
              className='todo__item'
              onClick={toggleClick(t.id)}>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList