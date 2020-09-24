import React from 'react';

import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ErrorBoundry from '../error-boundry/error-boundry.jsx';
import SwapiService from '../../services/swapi-service.js';
import DummySwapiService from '../../services/dummy-swapi-service.js';

import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages/index.js';
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context.jsx';

import './app.css';

export default class App extends React.Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />

            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
