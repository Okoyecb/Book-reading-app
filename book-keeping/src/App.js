import React from 'react';
import './App.css';
import Header from './components/header';
import Book from './components/book/book';
import axios from 'axios';
import BookModel from './components/Model/boooks';






function App() {
  return (
    <div className="App">
      <div className = "book-wrapper">
      <Header/>
      <div className= "row">
        <div className = "col-md-4">
          <Book/>  
        </div>
        <div className = "col-md-4">
        <Book/> 
        </div>
        <div className = "col-md-4">
        <Book/> 
        </div>
        <div className = "col-md-4">
          <Book/>  
        </div>
        <div className = "col-md-4">
        <Book/> 
        </div>
        <div className = "col-md-4">
        <Book/> 
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default App;
