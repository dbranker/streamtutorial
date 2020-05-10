import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header"> {meta.error}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    return (
      //old way
      // <input onChange={formProps.input.onChange}
      // value={formProps.input.value} />
      // <input {...formProps.input} autoComplete="false"/>
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSumbmit = (formProps) => {
    this.props.onSubmit(formProps);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSumbmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

//one way of doing the below
// export default connect()(reduxForm({
//     form: 'streamcreate',
//     //    validate: validate
//     validate
// })(StreamCreate));

export default reduxForm({
  form: "streamForm",
  //    validate: validate
  validate,
})(StreamForm);


