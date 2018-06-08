import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectorWallet } from 'app/redux/selectors/wallet';

export class Homepage extends PureComponent {
  render() {
    return (
      <div className="container">
        Homepage {this.props.wallet}
      </div>
    );
  }
}

Homepage.propTypes = {
  wallet: PropTypes.string,
};

Homepage.defaultProps = {
  wallet: null,
};

const mapStateToProps = createSelector(
  selectorWallet,
  wallet => ({ wallet }),
);

export default connect(mapStateToProps)(Homepage);
