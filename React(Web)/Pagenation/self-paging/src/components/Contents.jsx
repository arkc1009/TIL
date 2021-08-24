import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useTodos from "../hooks/useTodos";

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const ItemContainer = styled.div`
  width: 1000px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 0.5rem;
`;

const Item = ({ todo }) => {
  const { id, title } = todo;
  return <ItemContainer key={id}>{title}</ItemContainer>;
};

const Contents = () => {
  const todos = useTodos();
  const [curTodos, setCurTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, []);

  return (
    <Container>
      {/* {curTodos.map((todo) => (
        <Item todo={todo} />
      ))} */}
    </Container>
  );
};

export default Contents;
