import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service.js";
import Spinner from "../spinner/spinner.jsx";

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService;

  state = {
    peopleList: null,

  }

  componentDidMount() {
    this.swapiService
    .getAllPeople()
    .then((peopleList) => {
      this.setState({
        peopleList
      });
    });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li
        onClick={() => this.personOnItemSelected(id)}
        key={id}
        className="list-group-item"
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const {peopleList} = this.state;

    if (!peopleList) {
      return <Spinner />;
    }  

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
      {items}
      </ul>
    );
  }
}
