import React from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes/>
        <Footer/>
    </div>
  );
}

export default App;
