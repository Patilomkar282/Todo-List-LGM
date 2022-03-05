import React from "react";

const Form = ({setinputText, todos, setTodos, inputText, setStatus}) => {
  const inputTexthandler = (e) => {
    console.log(e.target.value);
    setinputText(e.target.value);
    
  };
 const submitTodohandler= (e) =>{
   e.preventDefault();
   setTodos([
     ...todos, {
       text: inputText, 
       completed: false, 
       id:(Math.round(Math.random() *10))}
   ]);
   setinputText("");
   
 }
  const statusHandler= (e) =>{
  setStatus(e.target.value);
  
  
  }


  
  return(
      <form>
      <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
      <button onClick={submitTodohandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default Form;
