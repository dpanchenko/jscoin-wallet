import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as walletActions from 'app/redux/actions/wallet';
import {
  selectorWallet,
  selectorConfirmedBalance,
  selectorConfirmedDebet,
  selectorConfirmedCredit,
  selectorPendingBalance,
  selectorPendingDebet,
  selectorPendingCredit,
} from 'app/redux/selectors/wallet';

import TransactionsList from 'app/components/TransactionsList';
import TransactionForm from 'app/components/TransactionForm';

export class ControlPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.handlerRefreshBalance = this.handlerRefreshBalance.bind(this);
    this.handlerSendAmount = this.handlerSendAmount.bind(this);
  }
  handlerRefreshBalance() {
    const { actions } = this.props;
    actions.wallet.getBalanceRequest();
  }
  handlerSendAmount(data) {
    const { actions } = this.props;
    console.log('handlerSendAmount', data);
    actions.wallet.makeTransactionRequest(data);
  }
  render() {
    const {
      wallet,
      confirmedBalance,
      confirmedDebet,
      confirmedCredit,
      pendingBalance,
      pendingDebet,
      pendingCredit,
    } = this.props;
    const incoming = Array.prototype.concat(
      (pendingCredit || []).map(item => ({ ...item, pending: true })),
      confirmedCredit || [],
    );
    const outgoing = Array.prototype.concat(
      (pendingDebet || []).map(item => ({ ...item, pending: true })),
      confirmedDebet || [],
    );
    return (
      <Fragment>
        <div className="row">
          <h3>Make payment</h3>
        </div>
        <div className="row">
          <div className="col">
            <TransactionForm wallet={wallet} handleSendAmount={this.handlerSendAmount} />
          </div>
        </div>
        <div className="row">
          <h3>Balance and statement</h3>
        </div>
        <div className="row">
          <div className="col">
            <div className="alert alert-success">Incoming</div>
            <TransactionsList list={incoming} incoming />
          </div>
          <div className="col">
            <div className="alert alert-danger">Outgoing</div>
            <TransactionsList list={outgoing} />
          </div>
          <div className="col-3">
            <div className="card text-center text-white bg-info">
              <div className="card-body">
                <div className="card-title">Balance</div>
                <p className="card-text">{confirmedBalance}{pendingBalance ? ` (pending ${pendingBalance})` : ''} coins</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ControlPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  confirmedBalance: PropTypes.number,
  confirmedCredit: PropTypes.array,
  confirmedDebet: PropTypes.array,
  pendingBalance: PropTypes.number,
  pendingCredit: PropTypes.array,
  pendingDebet: PropTypes.array,
  wallet: PropTypes.string,
};

ControlPanel.defaultProps = {
  confirmedBalance: null,
  confirmedCredit: null,
  confirmedDebet: null,
  pendingBalance: null,
  pendingCredit: null,
  pendingDebet: null,
  wallet: null,
};

const mapStateToProps = createSelector(
  [
    selectorWallet,
    selectorConfirmedBalance, selectorConfirmedDebet, selectorConfirmedCredit,
    selectorPendingBalance, selectorPendingDebet, selectorPendingCredit,
  ],
  (
    wallet,
    confirmedBalance, confirmedCredit, confirmedDebet,
    pendingBalance, pendingCredit, pendingDebet,
  ) => ({
    wallet,
    confirmedBalance,
    confirmedCredit,
    confirmedDebet,
    pendingBalance,
    pendingCredit,
    pendingDebet,
  }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    wallet: bindActionCreators(walletActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
