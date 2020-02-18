import React from 'react';
import logo from './logo.svg';
import platzi from './platzi.png';
import './App.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  
  state = {
    logo: logo
  };

  onClick = () => {
    this.setState({
      logo: platzi
    });
  }
   
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <CSSTransitionGroup 
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
        <img 
             key={this.state.logo}
             src={this.state.logo} 
             className="App-logo" 
             alt="logo" 
             />
        </CSSTransitionGroup>
       <h1>Animaciones</h1>

        <button onClick={this.onClick}>Pulsame</button>

      </header>
    </div>
    );
  }
}
export default App;
