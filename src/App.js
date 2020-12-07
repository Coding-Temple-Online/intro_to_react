import React, { Component } from 'react';
import Navbar from './components/Navbar/';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Shop from './views/Shop';
import Cart from './views/Cart';
import Blog from './views/Blog';
import BlogSingle from './views/BlogSingle';
import ShopSingle from './views/ShopSingle';
import Employees from './views/Employees';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Derek Hawkins",
      racers: [],
      stuff: '',
      cart: {},
      numitems: 0
    }
  }

  getStuff = () => {
    this.setState({
        stuff: 'Something Else'
    })
  }

  addToCart = (product) => {
    // Make a hashmap that will hold products and quantity of products

    // Constant lookup time === Almost no processing time needed to find item
    // If we did a For loop, we'd have to mandatorily loop through it until we found it (which takes time) until
    // if/when we find the item. Then we can tell the for loop to stop
    let newCart = this.state.cart;
    let newnumitems = this.state.numitems;

    // If there is nothing in the cart
    if (Object.keys(newCart).length === 0) {

      // Add a new object into the cart
      let newProductObj = {
        'product': product,
        quantity: 1
      }
      newCart[product.id] = newProductObj
      newnumitems = 1;
    }

    // Otherwise
    else {

      // Add the quantity of the pre-existing object by 1
      if (newCart.hasOwnProperty(product.id)) {
        newCart[product.id].quantity++;
        newnumitems += 1;
      }
 
      // Otherwise create the product
      else {
        let newProductObj = {
            'product': product,
            quantity: 1
          }
          newCart[product.id] = newProductObj
          newnumitems += 1;
      }
    }
    this.setState({
      cart: newCart,
      numitems: newnumitems
    })
  }

  removeFromCart = product => {
    let newCart = this.state.cart;
    let newnumitems = this.state.numitems;

    if(newCart[product.id].quantity > 1) {
      newCart[product.id].quantity--;
      newnumitems -= 1;
    }
    else {
      delete newCart[product.id];
      newnumitems -= 1
    }

    this.setState({
      cart: newCart,
      numitems: newnumitems
    })

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
        <Navbar cart={this.state.cart} numitems={this.state.numitems} />

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home handleSubmit={this.handleSubmit} name={this.state.name} racers={this.state.racers} />} />
            <Route exact path='/about' render={() => <About name={this.state.name} getStuff={this.getStuff} />} />
            <Route exact path='/contact' render={() => <Contact name={this.state.name} stuff={this.state.stuff} />} />
            <Route exact path='/shop' render={() => <Shop addToCart={this.addToCart} />} />
            <Route exact path="/shop/product/:id" render={({ match }) => <ShopSingle addToCart={this.addToCart} match={match} />} />
            <Route exact path='/cart' render={() => <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />} />
            <Route exact path='/blog' render={() => <Blog />} />
            <Route exact path="/blog/:id" render={({ match }) => <BlogSingle match={match} />} />
            <Route exact path="/employees" render={() => <Employees />} />
          </Switch>
        </main>

        <footer>
          
        </footer>
      </div>
    )
  }
}
