import React from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  pointer-events: none;
  transform: translate(-50%, -100%);
`;

const Tooltip = ({ content, position }) => {
  return (
    <TooltipContainer style={{ top: position.y, left: position.x }}>
      {content}
    </TooltipContainer>
  );
};

export default Tooltip;
