import React from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ItemList from '../item-list/item-list.jsx';
import PersonDetails from '../person-details/person-details.jsx';

import './app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showRandomPlanet: true,
      selectedPerson: null
    };
  
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
