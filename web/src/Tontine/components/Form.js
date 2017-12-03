import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired,
    submitValue: PropTypes.string,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(handleChange) {
    return e => {
      const values = {
        ...this.state.values,
        [e.target.name]: e.target.value,
      };

      this.setState({ values });

      if (handleChange) {
        handleChange(e.target.name, values[e.target.name]);
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.values);
  }

  render() {
    const {
      children,
      fields,
      submitValue,
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {fields.map(({
          label,
          type,
          name,
          handleChange,
        }) => (
          <div key={name}>
            {label}
            <input
              onChange={this.handleChange(handleChange)}
              type={type}
              name={name}
            />
          </div>
        ))}
        <input
          type="submit"
          value={submitValue || "submit"}
        />
        {children}
      </form>
    );
  }
}

export default Form;
