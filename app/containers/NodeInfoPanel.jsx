import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  selectorList as selectorNodesList,
  selectorError as selectorNodesError,
} from 'app/redux/selectors/nodes';
import {
  selectorMining,
  selectorBlocksCount,
} from 'app/redux/selectors/wallet';

export class NodeInfoPanel extends PureComponent {
  renderMessage() {
    const { blocks, error, nodes, mining } = this.props;
    if (nodes && nodes.length === 0) {
      return <div className="alert alert-danger">Network is down</div>;
    }
    if (error) {
      return <div className="alert alert-danger">Get nodes list failed</div>;
    }
    if (nodes && nodes.length > 0) {
      return <div className="alert alert-primary">Node {nodes[0].address} (blocks {blocks}){mining ? ' mining...':''}</div>;
    }
    return null;
  }
  render() {
    return (
      <Fragment>
        <div className="row">
          <h3>Miner node info</h3>
        </div>
        <div className="row">
          <div className="col">
            {this.renderMessage()}
          </div>
        </div>
      </Fragment>
    );
  }
}

NodeInfoPanel.propTypes = {
  blocks: PropTypes.number,
  error: PropTypes.bool,
  nodes: PropTypes.array,
  mining: PropTypes.bool,
};

NodeInfoPanel.defaultProps = {
  blocks: 0,
  error: false,
  nodes: null,
  mining: false,
};

const mapStateToProps = createSelector(
  [selectorNodesList, selectorNodesError, selectorBlocksCount, selectorMining],
  (nodes, error, blocks, mining) => ({ nodes, error, blocks, mining }),
);


export default connect(mapStateToProps)(NodeInfoPanel);
