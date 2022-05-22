import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { selectLocation } from "../../containers/Home/selectors";
import { incrementCurrentValue } from "../../containers/Home/actions";
import { connect } from "react-redux";
import { Box, Paper } from "@mui/material";

const HelloWorld = (props) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
      </Box>
    </div>
  );
};

HelloWorld.propTypes = {
  message: PropTypes.string,
  currentLocation: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    setHelloWorldValue: (addValue) => dispatch(incrementCurrentValue(addValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
