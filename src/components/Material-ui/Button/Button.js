import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { ButtonStyled, ButtonStyledWithMaterialStyled } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonComponent({ label, backgroundColor, isDisabled, onClick, ...props }) {
  const classes = useStyles();

  console.log('props', props)

  return (
    <div className={classes.root}>
      <Button variant="contained" disabled={isDisabled} style={backgroundColor && { backgroundColor }}>
        {label}
      </Button>
      <ButtonStyled variant="contained" backgroundColor={backgroundColor}>
        {label}
      </ButtonStyled>
      <ButtonStyledWithMaterialStyled variant="contained" backgroundColor={backgroundColor}>{label}</ButtonStyledWithMaterialStyled>
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
