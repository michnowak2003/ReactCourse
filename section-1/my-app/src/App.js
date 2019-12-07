import React from 'react';
import './App.css';


class App extends React.Component{

  state = {
    name: 'Jan',
    surname: 'Kowalski'
  }

  eventHandler = () => {
      this.setState({
        name: 'Bartek',
        surname: 'Nowak'
      })
  }

  render(){
    return(
      <>
        <button onClick={this.eventHandler}>
          Klik
        </button>
        <h1>
          Imię: {this.state.name} Nazwisko: {this.state.surname}
        </h1>  
      </>
    )
  }
}




export default App;
