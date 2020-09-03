import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service.js";
import Spinner from "../spinner/spinner.jsx";

import './item-list.css';

export default class ItemList extends Component {

  state = {
    peopleList: null,

  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
    .then((itemList) => {
      this.setState({
        itemList
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <li
        onClick={() => this.personOnItemSelected(id)}
        key={id}
        className="list-group-item"
        >
          {label}
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
