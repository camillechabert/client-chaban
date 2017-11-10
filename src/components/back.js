import React, { Component } from "react";
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class ButtonBack extends Component {

  render() {
    return (
      <Button as={Link} to={`/`} animated>
        <Button.Content visible>Retour</Button.Content>
        <Button.Content hidden>
          <Icon name='left arrow' />
        </Button.Content>
      </Button>
    );
  }
}

export default ButtonBack;
