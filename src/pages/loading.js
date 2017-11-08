import React from "react";
import { ProgressBar } from "react-materialize";

export default function(WrappedComponent, createUrl) {
  class WithLoader extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null
      };
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

      return <ProgressBar />;
    }
  }

  WithLoader.displayName = "WithLoader";
  return WithLoader;
}
