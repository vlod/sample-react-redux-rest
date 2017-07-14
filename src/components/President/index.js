import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import './index.css';
import { fetchPresident } from '../../actions';

const PresidentDetail = ({ president }) => (
  <div className="president">
    <div>Name: {president.get('president')}</div>
    <div>Number: {president.get('number')}</div>
    <div>Party: {president.get('party')}</div>
    <div>Served from: {president.get('took_office')} - {president.get('left_office')} </div>
    <div>Lived: {president.get('birth_year')}-{president.get('death_year')}</div>
    <img src={president.get('image')} width="100" height="122" alt={president.get('president')} />
  </div>
);
PresidentDetail.propTypes = {
  president: ImmutablePropTypes.map,
};

const President = ({ president }) => (
  <div className="president">
    <h1>President</h1>
    {president ? <PresidentDetail president={president} /> : null}
  </div>
);
President.propTypes = {
  president: ImmutablePropTypes.map,
};

class PresidentContainer extends React.Component {
  componentWillMount() {
    this.props.fetchPresident(this.props.params.id);
  }

  render() {
    return (
      <President president={this.props.president} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    president: state.main.get('selectedPresident'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPresident }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresidentContainer);

