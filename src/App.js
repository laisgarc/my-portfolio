import React from 'react';
import Routes from './routers';

import './styles.css';

import Header from './components/header'; 
import Menu from './components/menu';

const App = () => (
  <div className="App">
  <Header />
  <Menu />
  <Routes />
</div>
);

export default App;
