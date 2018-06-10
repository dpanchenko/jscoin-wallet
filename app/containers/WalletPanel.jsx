import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as walletActions from 'app/redux/actions/wallet';

import WalletForm from 'app/components/WalletForm';

export class WalletPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.handlerSelectWallet = this.handlerSelectWallet.bind(this);
  }
  handlerSelectWallet({ wallet }) {
    const { actions } = this.props;
    actions.wallet.setWallet(wallet);
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <WalletForm handleSelectWallet={this.handlerSelectWallet} />
        </div>
      </div>
    );
  }
}

WalletPanel.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    wallet: bindActionCreators(walletActions, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(WalletPanel);
