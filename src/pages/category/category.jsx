import { React } from 'react';
import PropTypes from 'prop-types';

const Category = ({ name }) => <h2>{name}</h2>;

Category.propTypes = {
  name: PropTypes.string,
};

Category.defaultProps = {
  name: '',
};

export default Category;
