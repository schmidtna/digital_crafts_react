import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <div>
      <h1>The best header ever: {props.title}</h1>
      { props.subltitle ? <h2>Subtitle: {props.subtitle}</h2> : null }
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header title="the best title" subtitle="Shazam" />
        <Header title="the second best title"  subtitle="Baloo"/>
        <Header title="the third best title" subtitle="Spam" />
        <Header title="the fourth best title" subtitle="biscuits" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
