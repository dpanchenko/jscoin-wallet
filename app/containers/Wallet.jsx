import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as walletActions from 'app/redux/actions/wallet';
import { selectorWallet } from 'app/redux/selectors/wallet';

export class Wallet extends PureComponent {
  render() {
    return (
      <div className="container">
        Wallet {this.props.wallet}
      </div>
    );
  }
}

Wallet.propTypes = {
  wallet: PropTypes.string,
};

Wallet.defaultProps = {
  wallet: null,
};

const mapStateToProps = createSelector(
  selectorWallet,
  wallet => ({ wallet }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    wallet: bindActionCreators(walletActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
