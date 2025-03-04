import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
    .then(res => {
      setUsers(res.data)
    })
  }, [])


  return (
    <div className="App">
      {users?.map(m => <p key={m.id}>{m.name}</p>)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
