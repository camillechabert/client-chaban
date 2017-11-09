import React from "react";
import { Loader } from 'semantic-ui-react';
import TopHeader from "./../components/header";

export default function(WrappedComponent, createUrl) {
  class WithLoader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    componentWillReceiveProps(props) {
      this.setState({
        data: null
      })
      fetch(createUrl(props))
        .then(res => res.json())
        .then(json => {
          this.setState({
            data: json
          });
      });
    }

    componentDidMount() {
      fetch(createUrl(this.props))
        .then(res => res.json())
        .then(json => {
          this.setState({
            data: json
          });
      });
    }

    render() {
      const { data } = this.state;

      if (data) {
        return <WrappedComponent data={data} />;
      }
      return (
        <div>
          <TopHeader/>
          <Loader size='medium' active>CHARGEMENT</Loader>
        </div>

      )

    }
  }

  WithLoader.displayName = "WithLoader";
  return WithLoader;
}
