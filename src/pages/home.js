import React, { Component } from "react";
import withLoader from "./loading";
import List from "./../components/list";

const HomePage = ({ data }) => (
  <div className="container">
    <h4>Fermeture Pont Chaban</h4>
    <div>
      <List data={data} />
    </div>
  </div>
);

export default withLoader(HomePage, () => "http://localhost:1337");
