import './App.css';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import styles from '../src/components/Add/Add.module.css';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert('Uzupełnij zadanie!');
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <Header />
      <Add />

      <input
        type="text"
        className={styles.input}
        placeholder="Wpisz treść zadania..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn btn-outline-success" onClick={() => addItem()}>
        ADD
      </button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{' '}
              <button onClick={() => deleteItem(item.id)}>Delete</button>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
