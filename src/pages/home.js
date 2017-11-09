import React from "react";
import { Container } from 'semantic-ui-react';
import withLoader from "./../components/loading";
import List from "./../components/list";
import TopHeader from "./../components/header";

const HomePage = ({ data }) => (
  <div>
    <TopHeader/>
    <Container>
        <List data={data} />
    </Container>
  </div>
);

export default withLoader(HomePage, () => "http://localhost:1337");
