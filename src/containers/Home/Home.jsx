import { Button, Divider, Stack, TextField } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { incrementCurrentValue } from "./actions";
import { selectHelloValue, selectLoading } from "./selectors";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTextFieldValue: undefined,
    };
  }

  render() {
    return (
      <>
        <nav>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            mt={3}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Button variant="contained">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="contained">
              <Link to="/helloworld">HelloWorld</Link>
            </Button>
            <Button variant="contained">
              <Link to="/any">Anywhere</Link>
            </Button>
          </Stack>
        </nav>

        <Stack 
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={20}
        >
          <h2>{this.props.helloWorldValue}</h2>
          <TextField
            label="How much to increment?"
            id="input-increment"
            color="primary"
            defaultValue={this.state.currentTextFieldValue}
            size="small"
            onChange={(e) => {
              this.setState({ currentTextFieldValue: e.target.value });
            }}
          />
          <Button 
            variant="contained"
            onClick={() => this.props.setHelloWorldValue(this.state.currentTextFieldValue)}
          >
            Increment
          </Button>
        </Stack>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  helloWorldValue: selectHelloValue(),
});

function mapDispatchToProps(dispatch) {
  return {
    setHelloWorldValue: (addValue) => dispatch(incrementCurrentValue(addValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
