import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    page: 0,
    eatenSushis: [],
    balance: 100
  }
  
  eatSushi = sushi => {
    if (this.isSushiEaten(sushi)) return
    if (this.state.balance - sushi.price > 0)
    this.setState({
       eatenSushis: [...this.state.eatenSushis, sushi],
       balance: this.state.balance - sushi.price})
  }
  
  isSushiEaten = sushi => {
  return this.state.eatenSushis.includes(sushi)

  }

  getSushis = () => {
   
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ sushis: data}))
      
  }

  componentDidMount(){
    this.getSushis()
  }

  sushiHandler = () => {
    this.setState({ page: this.state.page + 1 })
  };

  render() {

    const page = this.state.page * 4
    const sushiRendering = this.state.sushis.slice(page, page + 4)
    

    return (
      <div className="app">
        <SushiContainer isSushiEaten={this.isSushiEaten} sushiToRender={sushiRendering} eatSushi={this.eatSushi} button ={this.sushiHandler}  />
        
        <Table  eatSushi={this.state.eatenSushis} balance= {this.state.balance} />
      </div>
    );
  }
}

export default App;