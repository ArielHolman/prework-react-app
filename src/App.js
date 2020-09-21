import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      cars: [],
      houses: []
    };
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = (event) => {
    this.setState({input: event.target.value})
  }

  formSubmit = (event) => {
    event.preventDefault()
    // console.log("**THIS IS STATE", this.state.items)
    this.setState({
      items : [...this.state.cars, this.state.houses, this.state.input],
      input: ''
    })
  }

  render() {
    // console.log("**THIS STUPID STATE***", this.state.isOn)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.items} onChange={this.inputUpdate}/>
          <button>List Houses</button>
        </form>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.items} onChange={this.inputUpdate}/>
          <button>List Cars</button>
        </form>
        <FirstComponent items={this.state.cars} />
        <FirstComponent items={this.state.houses} />
      </header>
    </div>
  );
 }
}

export default App;

//  <FirstComponent/>
