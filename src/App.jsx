import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/form.jsx';
import Todolist from './Components/todolist.jsx'

function App() {

  const [inputText, setinputText ]=useState("");
  const [todos, setTodos]=useState([]);
  const [status, setStatus ]= useState("all");
  const [filteredTodos, setFilteredTodos]=useState([]);

  //use effect
  useEffect(() =>{
    filterHandler ();
    
  }, [todos, status] );
  
  //function
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true));
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed == false));
        break;
      default:
        setFilteredTodos(todos);
        break;
        
    }
  }
  console.log(filteredTodos);
  console.log(status);
  
  return (
    <main>
  <header>
    <h2>ToDo List</h2>
  </header>
    <Form  
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setinputText={setinputText}
      setStatus={setStatus}
     ></Form>
      <Todolist 
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos}>
      </Todolist>
    </main>
  );
}

export default App;