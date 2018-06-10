/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';

import FormFieldInput from 'app/components/FormFieldInput';

export class WalletForm extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(data) {
    const { handleSelectWallet } = this.props;
    if (handleSelectWallet) {
      handleSelectWallet(data);
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} >
        <Field
          component={FormFieldInput}
          id="wallet"
          name="wallet"
          label="Wallet"
          placeholder="Put your wallet here..."
        />
        <button className="btn btn-primary" type="submit">Get info / Refresh</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  handleSelectWallet: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
};

WalletForm.defaultProps = {
  handleSelectWallet: null,
};

export default reduxForm({
  form: 'walletForm',
})(WalletForm);

