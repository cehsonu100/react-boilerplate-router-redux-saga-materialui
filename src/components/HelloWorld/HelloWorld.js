import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectLocation } from '../../containers/Home/selectors';
import { incrementCurrentValue } from '../../containers/Home/actions';
import { connect } from 'react-redux';

const HelloWorld = props => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>{props.currentLocation.pathname}</h2>
    </div>
  );
};

HelloWorld.propTypes = {
  message: PropTypes.string,
  currentLocation: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    setHelloWorldValue: (addValue) => dispatch(incrementCurrentValue(addValue))
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(HelloWorld);