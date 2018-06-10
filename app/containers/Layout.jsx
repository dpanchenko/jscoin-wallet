import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as nodesActions from 'app/redux/actions/nodes';
import { selectorWallet } from 'app/redux/selectors/wallet';
import {
  selectorList as selectorNodesList,
  selectorError as selectorNodesError,
} from 'app/redux/selectors/nodes';

import ControlPanel from 'app/containers/ControlPanel';
import NodeInfoPanel from 'app/containers/NodeInfoPanel';
import WalletPanel from 'app/containers/WalletPanel';

export class Layout extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.nodes.getNodesRequest();
  }
  render() {
    const { error, nodes, wallet } = this.props;
    const showWalletPanel = nodes && nodes.length && !error;
    const showControlPanel = showWalletPanel && wallet;
    return (
      <main className="container">
        <NodeInfoPanel />
        {showWalletPanel && <WalletPanel />}
        {showControlPanel && <ControlPanel />}
      </main>
    );
  }
}

Layout.propTypes = {
  actions: PropTypes.object.isRequired,
  error: PropTypes.bool,
  nodes: PropTypes.array,
  wallet: PropTypes.string,
};

Layout.defaultProps = {
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
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
