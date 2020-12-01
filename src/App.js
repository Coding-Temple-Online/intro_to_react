import React, { Component } from 'react';
import Navbar from './components/Navbar/';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Derek Hawkins",
      racers: [],
      stuff: '',
    }
  }

  getStuff = () => {
    this.setState({
        stuff: 'Something Else'
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
        <Navbar />

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home handleSubmit={this.handleSubmit} name={this.state.name} racers={this.state.racers} />} />
            <Route path='/about' render={() => <About name={this.state.name} getStuff={this.getStuff} />} />
            <Route path='/contact' render={() => < Contact name={this.state.name} stuff={this.state.stuff} />} />
          </Switch>
        </main>

        <footer>
          
        </footer>
      </div>
    )
  }
}
