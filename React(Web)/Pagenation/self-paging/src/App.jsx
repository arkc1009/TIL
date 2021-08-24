import React, { useState } from "react";
import styled from "styled-components";
import Contents from "./components/Contents";
import PageBar from "./components/PageBar";

const Container = styled.div`
  width: 1200px;
  box-shadow: 1px 1px 1px black;
  padding: 1rem;
  margin: 1rem auto;
  background-color: #ddd;
`;

const App = () => {

  return (
    <Container>
      <Contents />
      <PageBar />
    </Container>
  );
};

export default App;
