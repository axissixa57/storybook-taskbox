import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { ButtonStyled } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonComponent({ label, backgroundColor, isDisabled, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* there is a bug with styled-components */}
      {/* <ButtonStyled variant="contained" backgroundColor={backgroundColor}>
        {label}
      </ButtonStyled> */}
      <Button variant="contained" disabled={isDisabled} style={backgroundColor && { backgroundColor }}>
        {label}
      </Button>
    </div>
  );
}

ButtonComponent.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
