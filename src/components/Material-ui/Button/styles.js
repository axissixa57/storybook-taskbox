import styled from "styled-components";
import { Button } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";

export const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`;

export const ButtonStyledWithMaterialStyled = withStyles((theme) => ({
  root: {
    backgroundColor: ({ backgroundColor }) => backgroundColor,
  },
}))(Button);
