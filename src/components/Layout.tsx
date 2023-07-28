import React from "react";
import Body from "./Body";
import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const BodyContainer = styled.div`
  height: 100vh;
  min-height: 100vh;
`;

const layout = () => {
  return (
    <BodyContainer>
      <Body />
    </BodyContainer>
  );
};

export default layout;
