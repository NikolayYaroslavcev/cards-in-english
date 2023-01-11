import styled from "styled-components";
import {PropsActions} from "./Actions";

export const StyledActions = styled.div<PropsActions>`
  display: flex;
  column-gap: 10px;
  opacity: ${({isMyDesk}) => isMyDesk ? '1' : '0.5'};

  img {
    cursor: ${({isMyDesk}) => isMyDesk ? 'pointer' : 'no-drop'};
  }

`