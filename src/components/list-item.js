import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-materialize";

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      date: PropTypes.string.isRequired,
      reason: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <Card>
        <h5>{item.date}</h5>
        <h5>{"Fermé pour cause de  " + item.reason}</h5>
        <Link to={`details/${item.id}`}>Détail</Link>
      </Card>
    );
  }
}

// <Link to="/test">Test</Link>

export default ListItem;
