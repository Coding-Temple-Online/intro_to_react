import React, { Component } from 'react';
import Navbar from './components/Navbar/';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Shop from './views/Shop';
import Cart from './views/Cart';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Derek Hawkins",
      racers: [],
      stuff: '',
      cart: [],
    }
  }

  getStuff = () => {
    this.setState({
        stuff: 'Something Else'
    })
  }

  addToCart = (product) => {
    this.setState({
      cart: this.state.cart.concat(product)
    })
  }

  removeFromCart = product => {
    let newCart = [...this.state.cart];
    // let index = newCart.indexOf(product);

    for (let i = 0; i < newCart.length; i++) {
      const item = newCart[i];
      if (product === item) {
        newCart.splice(i, 1)
        break;
      }
    }

    this.setState({
      cart: newCart
    })

    // if (index !== 1) {
    //   newCart.splice(index, 1)
    //   this.setState({
    //     cart: newCart
    //   })
    // }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    var year = e.target.year.value;
    var season = e.target.season.value;

    fetch(`https://ergast.com/api/f1/${year}/${season}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            })
        })
        .catch(error => console.error(error))

    e.target.reset();
  }
  
  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} />

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home handleSubmit={this.handleSubmit} name={this.state.name} racers={this.state.racers} />} />
            <Route path='/about' render={() => <About name={this.state.name} getStuff={this.getStuff} />} />
            <Route path='/contact' render={() => <Contact name={this.state.name} stuff={this.state.stuff} />} />
            <Route path='/shop' render={() => <Shop addToCart={this.addToCart} />} />
            <Route path='/cart' render={() => <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />} />
          </Switch>
        </main>

        <footer>
          
        </footer>
      </div>
    )
  }
}
