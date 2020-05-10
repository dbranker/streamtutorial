import { connect } from "react-redux";
import { createStream } from "../../actions";
import React, { Component } from "react";
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    
  onSumbmit = (formProps) => {
    this.props.createStream(formProps);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSumbmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
