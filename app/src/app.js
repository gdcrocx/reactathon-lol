import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import RecipeReviewCard from './components/event-card.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeReviewCard></RecipeReviewCard>
      </div>
    );
  }
}

export default App;
