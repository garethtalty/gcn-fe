import { React } from 'react';
import PropTypes from 'prop-types';

const Presenters = ({ name }) => <h2>{name}</h2>;

Presenters.propTypes = {
  name: PropTypes.string,
};

Presenters.defaultProps = {
  name: '',
};

export default Presenters;
