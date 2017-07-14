import React from 'react';
import PropTypes from 'prop-types';

import throbberImg from '../../assets/throbber.gif';

const Throbber = ({ width, height }) => (
  <img className="throbber" width={width} height={height} src={throbberImg} alt="" />
);

Throbber.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
Throbber.defaultProps = {
  width: 15,
  height: 15,
};
export default Throbber;
