import React from 'react';
import PropTypes from 'prop-types';
import styles from './video.module.css';

const Video = ({ id }) => (
  <img
    className={styles.thumbnail}
    alt="test"
    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
  />
);

Video.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Video;
