import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {

    var courses = [
      { name: 'Beginner C++ Course', price: 199 },
      { name: 'Complete Python Course', price: 209 },
      { name: 'Intro to Web Development', price: 59.99},
      { name: 'Complete Java Course', price: 234 }
    ];


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RKM Course Purchase Page</h2>
        </header>

        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
