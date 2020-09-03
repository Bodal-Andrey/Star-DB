import React, {Component} from 'react';

import ItemList from '../item-list/item-list.jsx';
import PersonDetails from '../person-details/person-details.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';

import './people-page.css';
import SwapiService from "../../services/swapi-service.js";

class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}

export default PeoplePage;
