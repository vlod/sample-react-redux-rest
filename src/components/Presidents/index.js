import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Immutable from 'immutable';

import './index.css';
import Throbber from '../Throbber';

class Presidents extends React.Component {
  static loadStatus(status) {
    return status === 'LOADING' ? <Throbber /> : null;
  }

  static renderPresidents(items) {
    if (items === undefined) return null;

    return items.map(item => <li key={item.get('number')}><Link to={`presidents/${item.get('number')}`}>{item.get('president')}</Link></li>);
  }

  render() {
    return (
      <div className="presidents">
        <h1>Presidents</h1>

        <p>List of presidents { Presidents.loadStatus(this.props.presidentsLoadStatus) }</p>
        <ul>
          {Presidents.renderPresidents(this.props.presidents)}
        </ul>
      </div>
    );
  }
}

Presidents.propTypes = {
  presidents: ImmutablePropTypes.list,
  presidentsLoadStatus: PropTypes.string,
};

Presidents.defaultProps = {
  presidents: Immutable.List([]),
  presidentsLoadStatus: null,
};

const mapStateToProps = (state) => {
  return {
    presidents: state.main.get('presidents'),
    presidentsLoadStatus: state.main.get('loadStatus'),
  };
};

export default connect(
  mapStateToProps,
  null,
)(Presidents);
