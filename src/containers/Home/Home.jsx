import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { incrementCurrentValue } from './actions';
import { selectHelloValue, selectLoading } from './selectors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTextFieldValue: undefined
    }
  }
  
  render() {
    return (
      <>
        <nav>
          <Link to='/' >Home</Link>
          <Link to='/helloworld' >HelloWorld</Link>
          <Link to='/any' >Anywhere</Link>
        </nav>
        
        <h1>{this.props.helloWorldValue}</h1>
        <input value={this.state.currentTextFieldValue} 
          placeholder='Give value' 
          onChange={(e) => {this.setState({currentTextFieldValue : e.target.value})}}
        />
        <button onClick={() => this.props.setHelloWorldValue(this.state.currentTextFieldValue)}>Increment</button>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  helloWorldValue: selectHelloValue()
});

function mapDispatchToProps(dispatch) {
  return {
    setHelloWorldValue: (addValue) => dispatch(incrementCurrentValue(addValue))
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);