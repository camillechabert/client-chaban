import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from 'semantic-ui-react'

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
      <Item>
        <Segment stacked>
          <Item.Image size='tiny' src="close.png" floated="left"/>
          <Item.Content>
              <Item.Meta>
                <h2 className="date">{item.date}</h2>
              </Item.Meta>
              <Item.Meta>
                <h4 className="reason">{"Fermé pour cause de  " + item.reason}</h4>
              </Item.Meta>
              <Item.Extra>
                <Button as={Link} to={`details/${item.id}`} color='teal' floated='right'>
                  DETAILS
                  <Icon name='right chevron'/>
                </Button>
              </Item.Extra>
          </Item.Content>
          </Segment>
      </Item>
    );
  }
}

export default ListItem;
