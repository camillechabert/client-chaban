import React, { Component } from "react";
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class ButtonBack extends Component {

  render() {
    return (
      <Link to={`/`}>
        <Button animated>
          <Button.Content visible>Retour</Button.Content>
          <Button.Content hidden>
            <Icon name='left arrow' />
          </Button.Content>
        </Button>
      </Link>
    );
  }
}

export default ButtonBack;
