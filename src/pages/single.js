import React from "react";
import withLoader from "./../components/loading";
import TopHeader from "./../components/header";
import ButtonBack from "./../components/back";
import { Link } from "react-router-dom";
import { Container, Segment, Button, Icon } from 'semantic-ui-react';


const SinglePage = ({ data }) => (
  <div className="container">
    <TopHeader/>
    <Container>
      <ButtonBack/>
      <Button.Group floated="right">
        <Link className="link" to={`/details/${parseInt(data.id) - 1}` }>
          <Button labelPosition='left' icon='left chevron' content='précedent'/>
        </Link>
        <Link className="link" to={`/details/${parseInt(data.id) + 1}` }>
          <Button labelPosition='right' icon='right chevron' content='suivant'/>
        </Link>
      </Button.Group>
      <Segment stacked>
        <h1>
          <Icon name="remove from calendar"/>
          {data.date}
        </h1>
        <h3>Raison : {data.reason}</h3>
        <h3>
          <Icon name="wait"/>
          Durée de la fermeture : de {data.start} à {data.end}
        </h3>
        <p>Le pont Jacques Chaban Delmas sera fermé à la circulation le {data.date} de {data.start} à {data.end} pour le passage de {data.reason}. Durant cette fermeture, nous vous conseillons d''emprunter les autres itinéraires de franchissement de la Garonne.</p>
        <a href={data.link}>
          <Button basic color='teal'>
            informations supplémentaires
          </Button>
        </a>
      </Segment>
    </Container>
  </div>
);

export default withLoader(
  SinglePage,
  props => `http://localhost:1337/${props.match.params.id}`
);
