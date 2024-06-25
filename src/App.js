import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef= useRef();

  const handleAddTodo =() =>{
    const text = inputRef.current.value;
    const newItem ={completed: false, text};
    setTodos([...todos, newItem])
    inputRef.current.value="";
  };

  const handleItemDone = (index) => {
   const newTodos =[...todos] //creates a copy of the current todos array
   newTodos[index].completed = !newTodos[index].completed;
   setTodos(newTodos);  
  };

  const handleDeleteItem = (index) => {
    const newTodos =[...todos]
    newTodos.splice(index, 1 ) //removes one item at the given index
    setTodos(newTodos) //updates the state with the modified newTodos array
  }







  return (
    <div className="App">
     <h2>TO DO List</h2>
     <div className='todo-container'>
     <ul>
        {todos.map(({text, completed}, index) => {
          return(<div className='item'>
                    <li className={completed ? "done":""} key={index} 
                        onClick={() => handleItemDone(index)}>  {text}  </li>
                     <span onClick={() => handleDeleteItem(index)} className='trash'> 🗑️ </span>
                 </div>);
        })}
     </ul> 
     <input ref={inputRef} placeholder="Enter item..." className='input' />
     <button onClick={handleAddTodo} className='btn'> Add</button>
    </div></div>
  );
}

export default App;
