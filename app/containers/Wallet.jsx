import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as nodesActions from 'app/redux/actions/nodes';
import * as walletActions from 'app/redux/actions/wallet';
import { selectorWallet } from 'app/redux/selectors/wallet';
import {
  selectorList as selectorNodesList,
  selectorError as selectorNodesError,
} from 'app/redux/selectors/nodes';

import ControlPanel from 'app/containers/ControlPanel';

export class Wallet extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      wallet: null,
    };
    this.handlerChangeWallet = this.handlerChangeWallet.bind(this);
    this.handlerSelectWallet = this.handlerSelectWallet.bind(this);
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.nodes.getNodesRequest();
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
  renderErrorMessage() {
    const { error, nodes } = this.props;
    if (nodes && nodes.length === 0) {
      return <div className="alert alert-danger">Network is down</div>;
    }
    if (error) {
      return <div className="alert alert-danger">Get nodes list failed</div>;
    }
    return null;
  }
  render() {
    const { error, nodes, wallet } = this.props;
    const showWalletPanel = nodes && nodes.length && !error && wallet;
    return (
      <Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <div className="form-inline my-2 my-lg-0">
              <input className="form-control" type="text" placeholder="Put your wallet here..." onChange={this.handlerChangeWallet} defaultValue={wallet} />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handlerSelectWallet}>Use wallet</button>
            </div>
          </div>
        </nav>
        <main className="container">
          {this.renderErrorMessage()}
          {showWalletPanel && <ControlPanel />}
        </main>
      </Fragment>
    );
  }
}

Wallet.propTypes = {
  actions: PropTypes.object.isRequired,
  error: PropTypes.bool,
  nodes: PropTypes.array,
  wallet: PropTypes.string,
};

Wallet.defaultProps = {
  error: false,
  nodes: null,
  wallet: null,
};

const mapStateToProps = createSelector(
  [selectorWallet, selectorNodesList, selectorNodesError],
  (wallet, nodes, error) => ({ wallet, nodes, error }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    nodes: bindActionCreators(nodesActions, dispatch),
    wallet: bindActionCreators(walletActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
