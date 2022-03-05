import React from 'react';
import Todo from './Todo.jsx';


const Todolist = ({todos, setTodos, filteredTodos}) =>{
  
  return(
     <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) =>(
<Todo 
  setTodos={setTodos} todos={todos}
  
  key={todo.id} 
  todo={todo}
  text={todo.text}>
</Todo>


       
        ))}
      </ul>
    </div>
  );
  
}
export default Todolist;

