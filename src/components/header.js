import React, { Component } from "react";
import { Header, Icon } from 'semantic-ui-react';

class TopHeader extends Component {
  render() {
    return (
      <div className="header" inverted>
        <Header inverted as='h3' icon textAlign='center'>
          <Icon name='ship' />
          PONT CHABAN
          <Header.Subheader>
            Informations sur les prochaines fermetures du pont
          </Header.Subheader>
        </Header>
      </div>
    );
  }
}

export default TopHeader;
