import React, { useState } from 'react';
import Select from './Select'
import Login from './Login'
// import '../styles/App.css';

function App() {
  const [page, setpage] = useState('select');

  const handleSelect = (value) => {
    setpage(value)
  }

  if (page === 'select') {
    return <Select selectOption={handleSelect} />
  }
  else if (page === 'login') {
    return <Login buttonPress={handleSelect} />
  }
  return (
    <div className="App">
      <header className="App-header">
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
