import React, { useState } from 'react';
import Assignments from './Assignments';
import Select from './Select';
import Login from './Login';
// import '../styles/App.css';

function App() {
	const [ page, setpage ] = useState('login');
	const [ pageData, setPageData ] = useState({});

	const changePage = (value) => {
		setpage(value);
	};

	const storeData = (data) => {
		setPageData(data);
	};

	if (page === 'login') {
		return <Login changePage={changePage} storeResponse={storeData} />;
	} else if (page === 'assignments') {
		return <Assignments changePage={changePage} pageData={pageData} />;
	}
}

export default App;
