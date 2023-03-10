import './App.css';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import TodoList from './components/ToDoList/ToDoList';
import Time from './components/Time/Time';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  useEffect(() => {}, []);
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <Header />
      <Time />
      <Add />
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
