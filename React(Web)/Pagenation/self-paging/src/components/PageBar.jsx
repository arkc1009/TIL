import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 2rem auto 1rem auto;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  border: 1px solid #fff;
`;

const PageItem = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  font-weight: ${(props) => (props.cur ? "bold" : "normal")};
  background-color: ${(props) => (props.cur ? "#fff" : "inherit")};
  line-height: 40px;
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    background-color: #fff;
  }
`;

const PageBar = () => {
  return (
    <Container>
      <PageItem>1</PageItem>
      <PageItem>2</PageItem>
      <PageItem cur>3</PageItem>
      <PageItem>4</PageItem>
      <PageItem>5</PageItem>
    </Container>
  );
};

export default PageBar;
