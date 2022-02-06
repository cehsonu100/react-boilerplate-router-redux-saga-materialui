import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    
    return (
     <>Login page</>
    );
  }
}



function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login);