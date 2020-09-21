import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carInput: '',
      houseInput: '',
      cars: [],
      houses: []
    };
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  updateCarInput = (event) => {
    this.setState({carInput: event.target.value})
  }

  updateHouseInput = (event) => {
    this.setState({houseInput: event.target.value})
  }

  formSubmitHouse = (event) => {
    event.preventDefault()
    console.log("**THIS IS STATE**", event.target)
    this.setState({
      houses: [...this.state.houses, this.state.houseInput],
      houseInput: '',
    })
  }

   formSubmitCars = (event) => {
    event.preventDefault()
    // console.log("**THIS IS STATE", this.state.items)
    this.setState({
      cars : [...this.state.cars, this.state.carInput],
      carInput: ''
    })
  }

  render() {
    // console.log("**THIS STUPID STATE***", this.state.isOn)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <form onSubmit={this.formSubmitHouse}>
          <input id="houseInput" value={this.state.houseInput} onChange={this.updateHouseInput}/>
          <button>List Houses</button>
        </form>
        <form onSubmit={this.formSubmitCars}>
          <input id="carInput" value={this.state.carInput} onChange={this.updateCarInput}/>
          <button>List Cars</button>
        </form>
        <FirstComponent items={this.state.cars} poop="List of Cars" />
        <FirstComponent items={this.state.houses} poop="List of Houses" />
      </header>
    </div>
  );
 }
}

export default App;

//  <FirstComponent/>
