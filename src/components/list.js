import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "./list-item";
import { Item } from 'semantic-ui-react'

class List extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render() {
    return (
      <Item.Group>
        {this.props.data.map(item => {
          return <ListItem key={item.id} item={item} />;
        })}
      </Item.Group>
    );
  }
}

export default List;
