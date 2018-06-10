import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  selectorList as selectorNodesList,
  selectorError as selectorNodesError,
} from 'app/redux/selectors/nodes';

export class NodeInfoPanel extends PureComponent {
  renderMessage() {
    const { error, nodes } = this.props;
    if (nodes && nodes.length === 0) {
      return <div className="alert alert-danger">Network is down</div>;
    }
    if (error) {
      return <div className="alert alert-danger">Get nodes list failed</div>;
    }
    if (nodes && nodes.length > 0) {
      return <div className="alert alert-primary">Node {nodes[0].address}</div>;
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
  error: PropTypes.bool,
  nodes: PropTypes.array,
};

NodeInfoPanel.defaultProps = {
  error: false,
  nodes: null,
};

const mapStateToProps = createSelector(
  [selectorNodesList, selectorNodesError],
  (nodes, error) => ({ nodes, error }),
);


export default connect(mapStateToProps)(NodeInfoPanel);
