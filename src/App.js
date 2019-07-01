import React from 'react';
import './App.css';
import Table from './components/Table';

import {Provider} from 'react-redux';
import store from './redux/store';


function App() {
  // headings are static, array of headings are provided to the component through headings prop
  const headings = [
    'Name',
    'Email',
    'City',
    'Company'
  ]
  // provider gives us our redux store, data and UI
  return (
    <Provider store={store}>
      <Table headings={headings}/>
    </Provider>
  );
}

export default App;
