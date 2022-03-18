import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin: 50px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  left: 12px;
  top: 12px;
`;
