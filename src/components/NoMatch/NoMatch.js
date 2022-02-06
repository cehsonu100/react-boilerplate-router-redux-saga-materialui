import React from 'react';
import PropTypes from 'prop-types';

const NoMatch = props => {
  return (
    <div>
      <h1>Wrong place</h1>
    </div>
  );
};

NoMatch.propTypes = {
  id: PropTypes.number
};

export default NoMatch;