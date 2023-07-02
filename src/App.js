import React from 'react';
import logo from './logo.svg';
import './App.css';
import LanguageChange from './components/languagechange/LanguageChange.jsx';
import Nav from './components/nav/Nav';
import Introduction from './components/introduction/Introduction';

function App() {
  return (
    <div className="App">
    <Nav />
    <Introduction />
    </div>
  );
}

export default App;
