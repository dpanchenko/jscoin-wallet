/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';

import FormFieldInput from 'app/components/FormFieldInput';

export const transferValidate = (values) => {
  const errors = {};

  if (!values.target) {
    errors.target = 'Required';
  }

  if (!values.amount) {
    errors.amount = 'Required';
  } else if (!/^\d+$/.test(values.amount)) {
    errors.amount = 'Only numbers allowed';
  }

  return errors;
};

export class TransactionForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(data) {
    const { handleSendAmount } = this.props;
    if (handleSendAmount) {
      handleSendAmount(data);
    }
  }
  render() {
    const { wallet, handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} >
        <div className="form-row">
          <div className="form-group col-md-5">
            <label>From wallet (currently active wallet)</label>
            <input type="text" readOnly disabled className="form-control" value={wallet} />
          </div>
          <Field
            component={FormFieldInput}
            id="target"
            name="target"
            label="To wallet"
            className="col-md-5"
            placeholder="Put target wallet here"
          />
          <Field
            component={FormFieldInput}
            id="amount"
            name="amount"
            label="Amount"
            className="col-md-2"
            placeholder="0"
          />
          <button className="btn btn-primary" type="submit" disabled={invalid}>Send</button>
        </div>
      </form>
    );
  }
}

TransactionForm.propTypes = {
  wallet: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  handleSendAmount: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
};

TransactionForm.defaultProps = {
  handleSendAmount: null,
};

export default reduxForm({
  form: 'transferForm',
  validate: transferValidate,
})(TransactionForm);

