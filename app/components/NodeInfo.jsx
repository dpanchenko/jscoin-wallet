/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class NodeInfo extends PureComponent {
  render() {
    const { list, incoming } = this.props;
    const classname = classnames('alert list-group-item d-flex justify-content-between align-items-center', {
      'alert-success': incoming,
      'alert-danger': !incoming,
    });
    return (
      <ul className="list-group">
        {!!list && list.map(({ wallet, amount, pending = false }, index) => (
          <li key={index} className={classname}>
            {wallet}{pending ? ' (pending)' : ''}
            <span className="badge badge-primary badge-pill">{amount}</span>
          </li>
        ))}
      </ul>
    );
  }
}

NodeInfo.propTypes = {
  list: PropTypes.array,
  incoming: PropTypes.bool,
};

NodeInfo.defaultProps = {
  list: [],
  incoming: null,
};

export default NodeInfo;
