import React, { Component } from "react";
import withLoader from "./loading";

const SinglePage = ({ data }) => (
  <div className="container">
    <h1>{data.date}</h1>
  </div>
);

export default withLoader(
  SinglePage,
  props => `http://localhost:1337/${props.match.params.id}`
);
