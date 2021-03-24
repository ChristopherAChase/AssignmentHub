import React, { useState } from 'react';
import Assignments from './Assignments';
import Select from './Select'
import Login from './Login'
// import '../styles/App.css';

function App() {
  const [page, setpage] = useState('login');

  const changePage = (value) => {
    setpage(value)
  }

  if (page === 'login') {
    return <Login changePage={changePage} />
  }
  else if (page === 'select') {
    return <Select changePage={changePage} />
  }
  else if (page === 'assignments') {
    return <Assignments changePage={changePage} />
  }
}

export default App;
