import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as walletActions from 'app/redux/actions/wallet';
import { selectorWallet } from 'app/redux/selectors/wallet';

export class Wallet extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      wallet: null,
    };
    this.handlerChangeWallet = this.handlerChangeWallet.bind(this);
    this.handlerSelectWallet = this.handlerSelectWallet.bind(this);
  }
  handlerChangeWallet(e) {
    this.setState({
      wallet: e.target.value,
    });
  }
  handlerSelectWallet() {
    const { actions } = this.props;
    const { wallet } = this.state;
    actions.wallet.setWallet(wallet);
  }
  render() {
    const { wallet } = this.props;
    return (
      <Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <div className="form-inline my-2 my-lg-0">
              <input className="form-control" type="text" placeholder="Search" onChange={this.handlerChangeWallet} defaultValue={wallet} />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handlerSelectWallet}>Use wallet</button>
            </div>
          </div>
        </nav>
        <main className="container">
          Wallet {wallet}
        </main>
      </Fragment>
    );
  }
}

Wallet.propTypes = {
  actions: PropTypes.object.isRequired,
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
